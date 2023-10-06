'use client';

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="bg-white max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10 text-gray-500">Weather AI</Text>
        <Subtitle className="text-xl text-center text-gray-500">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0, StepZen & More!
        </Subtitle>

        <Divider className="my-10"/>

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* City Picker */}
          <CityPicker />

        </Card>

      </Card>
    </div>
  )
}
