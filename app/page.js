import Banner from '@/components/Banner/Banner'
import Intro from '@/components/Intro/Intro';
import Description from '@/components/Description/Description';

export default function Home() {
  return (
    <div>
        <Banner src = "/image1.png" />
        <Intro />
        <Description />      
    </div>
  );
}
