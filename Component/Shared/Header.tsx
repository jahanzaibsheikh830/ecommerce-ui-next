import React, { useState, useEffect, useRef } from "react";
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
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { modal } from "../../ReduxStore/Actions/ModalAction";
import Image from "next/image";
import Modal from "./Modal";
export default function Header() {
  const [state, setState] = useState<boolean>(false);
  const [showlist, setShowList] = useState<boolean>(false);
  const [showBasket, setShowBasket] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setHeight(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div>
      <div className='mainHeader'>
        <Container>
          <div className='contactHeader'>
            <div className='logoNone'>
              <Image src={Logo} alt='logo' height='28' />
            </div>
            <div className='contactHeaderLeft'>
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
            <div className='contactHeaderRight'>
              <div>
                <p className='hover'>Theme FAQ&quot;s</p>
              </div>
              <div>
                <p className='hover'>Need Help?</p>
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
      <div
        className={`${"searchBarMain"} 
        ${height >= 5 && "searchBarMainFixed"}
        `}
      >
        <Container>
          <div className='searchBarHeader'>
            <div className='logoNone'>
              <Image src={Logo} alt='logo' height='28' />
            </div>
            <div className='searchBar'>
              <div className='searchIconAndInput'>
                <AiOutlineSearch size={20} className='searchIcon' />
                <div>
                  <input type='text' placeholder='Searching for' />
                </div>
              </div>
              <div className='searchList'>
                <button
                  type='button'
                  onClick={() => {
                    setState((prev) => !prev);
                  }}
                >
                  All Categories
                  <MdKeyboardArrowDown className='arrow' size={17} />
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
            <div className='carts'>
              <div
                className='iconBackground'
                onClick={() =>
                  dispatch(
                    modal({
                      showModal: true,
                      isLoginModal: true,
                    })
                  )
                }
              >
                <FaRegUser size={17} />
              </div>
              <div
                onClick={() => setShowBasket((prev) => !prev)}
                className='iconBackground'
              >
                <div className='cartQuantity'>
                  <span>{cartState.length}</span>
                </div>
                <AiOutlineShopping size={25} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className='navBar'>
        <Container>
          <div className='navBarMain'>
            <div
              className='categoryMain'
              onClick={() => setShowList((prev) => !prev)}
            >
              <div>
                <BsFillGridFill size={17} />
              </div>
              <div className='category'>
                <div>
                  <p>Categories</p>
                </div>
              </div>
              <div>
                <IoIosArrowForward className='categoryIcon' />
              </div>
            </div>
            <div className='nav'>
              <ul>
                <li className='homeMain'>
                  <div className='title'>Home</div>
                  <div className='navListOne'>
                    <p className='lisTitle'>Super Store</p>
                    <div>
                      <p>Grocery</p>
                      <p>Shop V3</p>
                      <p>Shop V4</p>
                    </div>
                  </div>
                </li>
                <li className='pagesMain'>
                  <div className='title'>Pages</div>
                  <div className='navListTwo'>
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
                <li className='accountsMain'>
                  <div className='title'>Accounts</div>
                  <div className='navListTwo'>
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
                <li className='vendorMain'>
                  <div className='title'>Vendor Account</div>
                  <div className='navListTwo'>
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
                  <div className='title'>Back to Demos</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={showlist ? "categoryList" : "categoryListNone"}>
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
      {/* {showModal && <Modal showModal login />} */}
    </div>
  );
}
