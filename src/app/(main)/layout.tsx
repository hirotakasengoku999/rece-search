import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <HeaderMenu />
      {/* メインコンテンツ */}
      <main className="flex-1 overflow-auto bg-slate-50">{children}</main>
      {/* フッター */}
      <footer className="bg-slate-800 text-white py-4 text-center">
        <p>© 2025 医療マスター検索アプリ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
