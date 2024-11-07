"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function Home() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      series: [
        {
          type: "graph",
          layout: "none",
          symbolSize: 50,
          roam: true,
          label: {
            show: true,
          },
          edgeSymbol: ["circle", "arrow"],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            fontSize: 20,
          },
          data: [
            {
              name: "Node 1",
              x: 300,
              y: 300,
            },
            {
              name: "Node 2",
              x: 800,
              y: 300,
            },
            {
              name: "Node 3",
              x: 550,
              y: 100,
            },
            {
              name: "Node 4",
              x: 550,
              y: 500,
            },
            {
              x: 550,
              y: 600,
            },
          ],
          links: [
            {
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              lineStyle: {
                width: 5,
                curveness: 0.2,
              },
            },
            {
              source: "Node 2",
              target: "Node 1",
              lineStyle: {
                curveness: 0.2,
              },
            },
            {
              source: "Node 1",
              target: "Node 3",
            },
            {
              source: "Node 2",
              target: "Node 3",
            },
            {
              source: "Node 2",
              target: "Node 4",
            },
            {
              source: "Node 1",
              target: "Node 4",
            },
          ],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0,
          },
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);
  return (
    <div className="flex flex-col h-screen gap-4 p-4">
      <header className="flex gap-4 items-center justify-between p-4 bg-cgray rounded-md text-white shadow-md">
        <div className="flex items-center gap-2">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          <span>GHOST</span>
          <span className="text-sm">(v13.4.12)</span>
        </div>
        <div className="flex gap-2">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <span>tail</span>
        </div>
      </header>
      <nav className="flex gap-4">
        <a className="rounded transition-colors flex items-center justify-center bg-cpurple gap-2 hover:bg-[#AB47BC] dark:hover:bg-[#ccc] h-10 px-8 py-4">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </a>
        <div className="flex gap-1">
          <a className="rounded transition-colors flex items-center justify-center bg-cblue gap-2 hover:bg-[#42A5F5] dark:hover:bg-[#ccc] h-10 px-8 py-4">
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
          </a>
          <a className="rounded transition-colors flex items-center justify-center bg-cblue gap-2 hover:bg-[#42A5F5] dark:hover:bg-[#ccc] h-10 px-8 py-4">
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
          </a>
        </div>
      </nav>
      <main className="flex-1 flex flex-col rounded border-2 border-orange-500">
        <div className="bg-blue-100 font-600 px-4 py-2 text-lg">Block: 153222</div>
        <div className="flex-1">
          <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between"></footer>
    </div>
  );
}
