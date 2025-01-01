import { FaFileMedical } from 'react-icons/fa'

const HeaderMenu = () => {
  return (
    <header className="bg-background border-b bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className='flex items-center space-x-2'>
            <FaFileMedical className="h-6 w-6" />
            <span>レセプト 医科診療行為マスター検索</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default HeaderMenu

