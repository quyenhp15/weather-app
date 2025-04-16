"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Weather } from "@/lib/models";
import {
  getCurrentWeathersThunk,
  getForecastWeathersThunk,
} from "@/lib/store/home";
import { Card, Col, Row, Typography } from "antd";
import { useEffect } from "react";
import { styled } from "styled-components";

const { Title, Text } = Typography;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const Label = styled(Text)`
  font-weight: 500;
  display: block;
`;

const ForecastCard = styled(Card)`
  margin-bottom: 24px;
`;

const ForecastBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const HomeContainer = () => {
  const { currentWeather, forecastWeathers } = useAppSelector(
    (state) => state.home
  );
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(getCurrentWeathersThunk("London"));
    appDispatch(getForecastWeathersThunk("London"));
  }, [appDispatch]);

  const groupByUTCDate = (
    weatherList: Weather[]
  ): Record<string, Weather[]> => {
    return weatherList.reduce((acc, item) => {
      const date = item.date
        ? item.date.toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];

      if (!acc[date]) acc[date] = [];
      acc[date].push(item);
      return acc;
    }, {} as Record<string, Weather[]>);
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  const formatTime = (date?: Date) => {
    if (!date) return "--:--";
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
  };

  if (!currentWeather || !forecastWeathers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card
        title={
          <Title level={4} style={{ margin: 0 }}>
            {formatDate(new Date().toISOString().split("T")[0])}
          </Title>
        }
        extra={
          <Icon src={currentWeather.icon} alt={currentWeather.description} />
        }
        style={{ maxWidth: 500, margin: "auto" }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Label>Description: {currentWeather.description}</Label>
            <Label>Temperature: {currentWeather.temperature.value}°C</Label>
          </Col>

          <Col span={12}>
            <Label>
              Humidity:
              <Text> {currentWeather.humidity}%</Text>
            </Label>
            <Label>
              Pressure: <Text> {currentWeather.pressure} hPa</Text>
            </Label>
            <Label>
              Wind:
              <Text>
                {currentWeather.wind.speed} m/s at {currentWeather.wind.deg}°
              </Text>
            </Label>
          </Col>
        </Row>
      </Card>
      {Object.entries(groupByUTCDate(forecastWeathers)).map(
        ([dateStr, items]) => (
          <ForecastCard key={dateStr} title={formatDate(dateStr)}>
            <Row gutter={[16, 16]} wrap>
              {items.map((item, idx) => (
                <Col key={idx}>
                  <ForecastBlock>
                    <Text>{formatTime(item.date)}</Text>
                    <WeatherIcon
                      src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                      alt={item.description}
                    />
                    <Text>{item.temperature.value}°C</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {item.description}
                    </Text>
                  </ForecastBlock>
                </Col>
              ))}
            </Row>
          </ForecastCard>
        )
      )}
    </>
  );
};

export default HomeContainer;
