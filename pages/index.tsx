import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./Components/L/Layout";
import HomeSection1 from "./Components/H/HomeSection1";
import HomeSection2 from "./Components/H/HomeSection2";
import HomeSection3 from "./Components/H/HomeSection3";
import HomeSection4 from "./Components/H/HomeSection4";
import HomeSection5 from "./Components/H/HomeSection5";
import HomeSection6 from "./Components/H/HomeSection6";
import HomeSection7 from "./Components/H/HomeSection7";
import HomeSection8 from "./Components/H/HomeSection8";
import HomeSection9 from "./Components/H/HomeSection9";
import HomeSection10 from "./Components/H/HomeSection10";
import HomeSection11 from "./Components/H/HomeSection11";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="border border-red-900">
      <Layout>
        {/* Hero Section */}
      <HomeSection1 />
        {/* Hero Section */}

      {/* About */}
      <HomeSection2 />
      {/* About */}

      {/* Why Choose Us */}
      <HomeSection3 />
      {/* Why Choose Us */}

      {/* Services */}
      <HomeSection4 />
      {/* Services */}

      {/* Expert Team */}
      <HomeSection5 />
      {/* Expert Team */}

      {/* Work Process */}
      <HomeSection6 />
      {/* Work Process */}
      
      {/* Faq */}
      <HomeSection7 />
      {/* Faq */}

      {/* Case Study */}
      <HomeSection8 />
      {/* Case Study */}

      {/* Pricing Plan */}
      <HomeSection9 />
      {/* Pricing Plan */}

      {/* Professional Skill */}
      <HomeSection10 />
      {/* Professional Skill */}

      {/* blog Post */}
      <HomeSection11 />
      {/* blog Post */}

    </Layout>
    </div>
  );
}
