import {
  MagnifyingGlass,
  User,
  SignOut,
  ShoppingCart,
} from "@phosphor-icons/react";
import { Avatar, Dropdown, Button } from "keep-react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/slices/authSlice";
import { calculateTotalPrice } from "../utils/priceCalculations";

const Navbar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="h-[12vh] bg-slate-100">
      <ul className="h-full flex justify-between items-center px-6 md:px-10">
        <li className="text-3xl flex-start">My Shop</li>
        <li className="flex-end">
          <span className="flex space-x-4 md:space-x-8 items-center">
            <MagnifyingGlass size={32} className="hover:cursor-pointer" />
            {userInfo ? (
              <Dropdown
                label={
                  <Avatar shape="circle" size="md" img={userInfo?.profile} />
                }
                size="sm"
                dismissOnClick={true}
              >
                <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
                  <button
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Sign out
                  </button>
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <User size={32} className="hover:cursor-pointer" />
            )}
            <Button size="xs" type="outlineGray">
              <span>
                <ShoppingCart size={20} color="#444" />
              </span>
              <span className="ml-1 text-metal-600">
                Cart ${calculateTotalPrice(cartItems).toFixed(2)}
              </span>
            </Button>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
