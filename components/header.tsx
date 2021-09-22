import React, { useState } from "react";
import styles from "../styles/components/header.module.scss";
import Container from "./container";
import { RiPhoneLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Logo from "../assests/logo.svg";

import Image from "next/image";
export default function Header() {
  const [state, setState] = useState<boolean>(false);
  return (
    <div>
      <div className={styles.mainHeader}>
        <Container>
          <div className={styles.contactHeader}>
            <div className={styles.logoNone}>
              <Image src={Logo} alt='logo' height='28' />
            </div>
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
                <p className={styles.hover}>Theme FAQ&quot;s</p>
              </div>
              <div>
                <p className={styles.hover}>Need Help?</p>
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
            <div className={styles.logoNone}>
              <Image src={Logo} alt='logo' height='28' />
            </div>
            <div className={styles.searchBar}>
              <div className={styles.searchIconAndInput}>
                <AiOutlineSearch size={20} className={styles.searchIcon} />
                <div>
                  <input type='text' placeholder='Searching for' />
                </div>
              </div>
              <div className={styles.searchList}>
                <button type='button' onClick={() => setState((prev) => !prev)}>
                  All Categories
                  <MdKeyboardArrowDown className={styles.arrow} size={17} />
                </button>
                <div style={{ display: `${state ? "block" : "none"}` }}>
                  <ul>
                    <li>All Categories</li>
                    <li>Cars</li>
                    <li>Clothes</li>
                    <li>Electronics</li>
                    <li>laptop</li>
                    <li>Desktop</li>
                    <li>Camera</li>
                    <li>Toys</li>
                  </ul>
                </div>
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
                <BsFillGridFill size={17} />
              </div>
              <div className={styles.category}>
                <div>
                  <p>Categories</p>
                </div>
              </div>
              <div>
                <IoIosArrowForward className={styles.categoryIcon} />
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
