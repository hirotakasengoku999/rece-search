export default function MainPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action="" className="w-full max-w-md bg-white p-6 rounded shadow">
        {/* 診療行為名称 */}
        <div className="mb-4">
          <label htmlFor="diagnosticName" className="font-medium text-gray-700">
            診療行為名称
          </label>
          <input
            type="text"
            id="diagnosticName"
            name="diagnosticName"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="例: 初診料"
          />
        </div>

        {/* 診療行為コード */}
        <div className="mb-4">
          <label htmlFor="diagnosticCode" className="block font-medium text-gray-700">
            診療行為コード
          </label>
          <input
            type="text"
            id="diagnosticCode"
            name="diagnosticCode"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="例: 111000110"
          />
        </div>

        {/* 表示件数 */}
        <div className="mb-4">
          <label htmlFor="displayCount" className="block font-medium text-gray-700">
            表示件数
          </label>
          <select
            id="displayCount"
            name="displayCount"
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
          >
            <option value={100}>100</option>
            <option value={20}>20</option>
          </select>
        </div>

        {/* 検索ボタン */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          検索
        </button>
      </form>
    </div>
  );
}
