import CoverImage from "../shared/CoverImage";
import coverImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import OurShopTab from "./OurShopTab";


const OurShop = () => {
  const [menu] = useMenu()
  const drinks  = menu.filter(food => food.category === "drinks")
  const dessert  = menu.filter(food => food.category === "dessert")
  const pizza  = menu.filter(food => food.category === "pizza")
  const salad  = menu.filter(food => food.category === "salad")
  const soup  = menu.filter(food => food.category === "soup")
  console.log(drinks, dessert, pizza, salad, soup)
  return (
    <div>
       <CoverImage
       title="ourShop"
       bannerImg={coverImg}
       ></CoverImage>
        <Tabs className="mx-w-7xl max-auto text-center">
    <TabList className="w-96 max-auto">
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel >
    <OurShopTab
     food={salad}></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
     food={pizza}></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
     food={soup}></OurShopTab>
    </TabPanel>   
    <TabPanel>
    <OurShopTab
     food={dessert}></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
     food={drinks}></OurShopTab>
    </TabPanel>
    
  </Tabs>
    </div>
  );
};

export default OurShop;