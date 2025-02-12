"use client";

import { Float32Message } from "@/interfaces/float32";
import { useEffect, useState } from "react";
import ROSLIB from "roslib";

export default function RobotInfo() {
  const [robotBattery, setRobotBattery] = useState(0.0);
  const [temperature, setTemperature] = useState(0.0);

  useEffect(() => {
    const ros = new ROSLIB.Ros({
      // url: "ws://10.42.0.1:9090"   // for HotSpot connection,
      url: "ws://192.168.2.246:9090", // for web connection
    });

    ros.on("connection", () => console.log("Conectado ao ROS!"));
    ros.on("error", (error) => console.error("Erro:", error));
    ros.on("close", () => console.log("Conexão encerrada."));

    // const batteryTopic = new ROSLIB.Topic({
    //   ros: ros,
    //   name: "/dummy/listener",
    //   messageType: "std_msgs/String",
    // });

    // batteryTopic.subscribe((message: any) => setRobotBattery(message.data));

    const tempTopic = new ROSLIB.Topic({
      ros: ros,
      name: "/dummy/temperature",
      messageType: "std_msgs/Float32",
    });

    tempTopic.subscribe((message: ROSLIB.Message) => {
      const tempMessage = message as Float32Message;
      setTemperature(tempMessage.data);
    });
    
    return () => {
      // batteryTopic.unsubscribe();
      tempTopic.unsubscribe();
      ros.close();
    };
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <ol className="flex flex-col list-inside list-decimal text-sm items-center text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <h2>:: Informações do Robô ::</h2>
        <br/>
          {/* <li className="mb-2">
            Bateria:
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {robotBattery}%
            </code>
            .
          </li> */}
          <li className="mb-2">
            Temperatura:
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {temperature}°C
            </code>
            .
          </li>
        </ol>
    </div>
  );
}
