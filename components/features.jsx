import { CircleEllipsis, Clipboard, VideoIcon } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CircleEllipsis />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                AI Question Generation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized interview questions generated by our advanced
                AI system.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <VideoIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Answer Recording
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Record your responses and receive comprehensive feedback for
                improvement.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clipboard />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Detailed Feedback
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get structured feedback with actionable insights to enhance your
                interview performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
