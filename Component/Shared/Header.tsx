import React, { useState } from "react";
import styles from "../../Styles/Components/Shared/Header.module.scss";
import Container from "./Container";
import { RiPhoneLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdArrowDropright,
} from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Logo from "../../assests/logo.svg";
import Basket from "./Basket";
import { listData } from "../../HelpersData/CategoryList.helper";
import { useSelector, RootStateOrAny } from "react-redux";
import Image from "next/image";
export default function Header() {
  const [state, setState] = useState<boolean>(false);
  const [showlist, setShowList] = useState<boolean>(false);
  const [showBasket, setShowBasket] = useState<boolean>(false);
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
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
                <button
                  type='button'
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
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
              <div
                onClick={() => setShowBasket((prev) => !prev)}
                className={styles.iconBackground}
              >
                <div className={styles.cartQuantity}>
                  <span>{cartState.length}</span>
                </div>
                <AiOutlineShopping size={25} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.navBar}>
        <Container>
          <div className={styles.navBarMain}>
            <div
              className={styles.categoryMain}
              onClick={() => setShowList((prev) => !prev)}
            >
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
                <li className={styles.homeMain}>
                  <div className={styles.title}>Home</div>
                  <div className={styles.navListOne}>
                    <p className={styles.lisTitle}>Super Store</p>
                    <div>
                      <p>Grocery</p>
                      <p>Shop V3</p>
                      <p>Shop V4</p>
                    </div>
                  </div>
                </li>
                <li className={styles.pagesMain}>
                  <div className={styles.title}>Pages</div>
                  <div className={styles.navListTwo}>
                    <div>
                      <p>
                        <span>Sale Page</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Vendor</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Shop</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
                <li className={styles.accountsMain}>
                  <div className={styles.title}>Accounts</div>
                  <div className={styles.navListTwo}>
                    <div>
                      <p>
                        <span>Orders</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Profile</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Address</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Support tickets</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Wishlist</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li className={styles.vendorMain}>
                  <div className={styles.title}>Vendor Account</div>
                  <div className={styles.navListTwo}>
                    <div>
                      <p>
                        <span>Dashboard</span>
                      </p>
                      <p>
                        <span>Products</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Orders</span>
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </p>
                      <p>
                        <span>Profile</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.title}>Back to Demos</div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={showlist ? styles.categoryList : styles.categoryListNone}
          >
            <ul>
              {listData.map((value, index) => {
                return (
                  <li key={index}>
                    <value.icon size={20} />
                    <span>{value.text}</span>
                    {/* {value.moreIcon && <value.moreIcon size={15} />} */}
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
      <Basket showBasket={showBasket} setShowBasket={setShowBasket} />
    </div>
  );
}
