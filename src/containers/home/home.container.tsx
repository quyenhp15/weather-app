"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  getCurrentWeathersThunk,
  getForecastWeathersThunk,
} from "@/lib/store/home/home.slice";
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

const HomeContainer = () => {
  const { currentWeather, forecastWeathers } = useAppSelector(
    (state) => state.home
  );
  console.log("forecastWeathers ", forecastWeathers);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(getCurrentWeathersThunk("London"));
    appDispatch(getForecastWeathersThunk("London"));
  }, [appDispatch]);

  if (!currentWeather || !forecastWeathers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card
        title={
          <Title level={4} style={{ margin: 0 }}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
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
    </>
  );
};

export default HomeContainer;
