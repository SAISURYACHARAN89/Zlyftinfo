import { AiOutlineYoutube } from 'react-icons/ai';
export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 justify-center items-center bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <div style={{marginBottom: '10px'}}>
        <a href="https://www.youtube.com/@zlyfty" target='blank'>
      <AiOutlineYoutube size={24}  />
      </a>
      </div>
      &copy; {new Date().getFullYear()} ZLYFT. All rights reserved.
    </footer>
  )
}