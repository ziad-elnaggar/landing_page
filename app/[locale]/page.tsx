import "./globals.css";

import Footer from "../sharedComponent/footer/Footer";
import NavBar from "../sharedComponent/navbar/NavBar";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Banner from "@/components/banner/Banner";
import InsightsToAction from "@/components/insightsToAction/InsightsToAction";
import LatestNews from "@/components/latestNews/LatestNews";
import ServicesSolution from "@/components/servicesSolution/ServiceSolution";
import TrustLinePlatform from "@/components/trustLinePlatform/TrustlinePlatform";
import ProtectingSliders from "@/components/protectingSlider/ProtectingSliders";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { navBar }: any = await getDictionary(locale);
  const { banner }: any = await getDictionary(locale);
  const { ServiceSolution }: any = await getDictionary(locale);
  const { insightsToAction }: any = await getDictionary(locale);
  const { securityExperts }: any = await getDictionary(locale);
  const { protectingTop }: any = await getDictionary(locale);
  const { latestNews }: any = await getDictionary(locale);
  const { trustlinePlatform }: any = await getDictionary(locale);

  return (
    <div>
      <NavBar navBar={navBar} locale={locale} />
      <Banner banner={banner} />
      <ServicesSolution ServiceSolution={ServiceSolution} />
      <InsightsToAction
        securityExperts={{ insightsToAction, securityExperts }}
      />
      <TrustLinePlatform trustlinePlatform={trustlinePlatform}/>
      <ProtectingSliders protectingTop={protectingTop} />
      <LatestNews latestNews={latestNews} />
      <Footer />
    </div>
  );
}
