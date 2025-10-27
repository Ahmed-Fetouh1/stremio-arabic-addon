
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center">
      <p className="text-gray-500">
        هذه الإضافة هي خدمة من طرف ثالث وليست تابعة لـ Stremio أو أي من مزودي المحتوى.
      </p>
      <p className="text-gray-500 mt-2">
        يرجى احترام قوانين حقوق النشر في بلدك.
      </p>
    </footer>
  );
};

export default Footer;
