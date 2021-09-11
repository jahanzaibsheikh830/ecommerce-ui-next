import styles from "../styles/components/header.module.scss";
import Container from "./container";
import { RiPhoneLine } from "react-icons/Ri";
import { AiOutlineMail } from "react-icons/Ai";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/Ai";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/Io";
import { FaRegUser } from "react-icons/Fa";
import { HiTemplate } from "react-icons/Hi";
import Logo from "../assests/logo.svg";
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <div className={styles.mainHeader}>
        <Container>
          <div className={styles.contactHeader}>
            <div className={styles.contactHeaderLeft}>
              <div>
                <div>
                  <RiPhoneLine size={20} />
                </div>
                <div>+88012 3456 7894</div>
              </div>
              <div>
                <div>
                  <div>
                    <AiOutlineMail size={20} />
                  </div>
                  <div>support@ui-lib.com</div>
                </div>
              </div>
            </div>
            <div className={styles.contactHeaderRight}>
              <div>
                <p>Theme FAQ"s</p>
              </div>
              <div>
                <p>Need Help?</p>
              </div>
              <div>
                <p>EN</p>
              </div>
              <div>
                <p>USD</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.searchBarMain}>
        <Container>
          <div className={styles.searchBarHeader}>
            <div>
              <Image src={Logo} alt='logo' height='28' />
            </div>
            <div className={styles.searchBar}>
              <div>
                <AiOutlineSearch size={20} className={styles.searchIcon} />
              </div>
              <div>
                <input type='search' placeholder='Searching for' />
              </div>
              <div>
                <button>
                  All Categories <IoIosArrowDown className={styles.arrowIcon} />{" "}
                </button>
              </div>
            </div>
            <div className={styles.carts}>
              <div className={styles.iconBackground}>
                <FaRegUser size={17} />
              </div>
              <div className={styles.iconBackground}>
                <AiOutlineShopping size={25} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.navBar}>
        <Container>
          <div className={styles.navBarMain}>
            <div className={styles.categoryMain}>
              <div>
                <HiTemplate size={22} />
              </div>
              <div className={styles.category}>
                <div> <p>Categories</p></div>
              </div>
              <div>
                <IoIosArrowForward className={styles.categoryIcon}/>
              </div>
            </div>
            <div className={styles.nav}>
              <ul>
                <li>Home</li>
                <li>Pages</li>
                <li>User Account</li>
                <li>Vendor Account</li>
                <li>Back to Demos</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
