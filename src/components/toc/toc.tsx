"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

function Toc() {
  useEffect(() => {
    // Tocbotの初期化
    tocbot.init({
      tocSelector: ".toc", // 目次の表示部分のクラス
      contentSelector: ".dict", // 目次を生成する対象のクラス
      headingSelector: "h2", // 目次に表示する見出しのタグ
      scrollSmoothOffset: -100,
      headingsOffset: 100,
    });

    // コンポーネントがアンマウントされたときにTocbotを破棄
    return () => tocbot.destroy();
  }, []);

  return (
    <div className="sticky top-0 pt-16 ml-8">
      <nav className="toc px-0 pb-8 text-base"></nav>
    </div>
  );
}

export default Toc;
