import "./globals.css";
import Banner from "@/components/banner/Banner";
import TrustLinePlatform from "@/components/trustLinePlatform/TrustlinePlatform";
import Footer from "../sharedComponent/footer/Footer";
import NavBar from "../sharedComponent/navbar/NavBar";
import LatestNews from "@/components/latestNews/LatestNews";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import InsightsToAction from "@/components/insightsToAction/InsightsToAction";
import ServicesSolution from "@/components/servicesSolution/ServiceSolution";
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

  return (
    <div>
      <NavBar navBar={navBar} />
      <Banner banner={banner} />
      <ServicesSolution ServiceSolution={ServiceSolution}/>
      <InsightsToAction insightsToAction={insightsToAction} securityExperts={securityExperts} />
      <TrustLinePlatform />
      <ProtectingSliders protectingTop={protectingTop} />
      <LatestNews latestNews={latestNews}/>
      <Footer />
    </div>
  );
}
