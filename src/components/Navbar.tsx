import { AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaCreativeCommonsSa } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

function Navbar() {
  return (
    <nav id="sidebar" className="active">
      <ul className="list-unstyled components mb-5">
        <li>
          <AiOutlineBell color='black' fontSize={25} />
        </li>
        <li>
          <IoLocationOutline color='black' fontSize={25} />
        </li>
        <li>
          <FaCreativeCommonsSa color='black' fontSize={25} />
        </li>
        <li>
          <VscSettings color='black' fontSize={25} />
        </li>
        <li>
          <AiOutlineSetting color='black' fontSize={25} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
