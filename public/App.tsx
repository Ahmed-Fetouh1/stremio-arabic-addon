
import React from 'react';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';
import { FEATURES, SUPPORTED_SITES, SAMPLE_CONTENT } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <main>
        <Header />

        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              لماذا تختار إضافتنا؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="supported-sites" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    المصادر المدعومة
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-6" dir="ltr">
                    {SUPPORTED_SITES.map((site) => (
                        <div key={site} className="bg-gray-700 text-gray-300 font-mono py-2 px-4 rounded-md shadow-md">
                            {site}
                        </div>
                    ))}
                </div>
                 <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
                    نحن نجمع المحتوى من هذه المواقع الشهيرة لنقدم لك المكتبة العربية الأكثر شمولاً على Stremio.
                </p>
            </div>
        </section>

        <section id="showcase" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              محتوى مميز
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
              {SAMPLE_CONTENT.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
