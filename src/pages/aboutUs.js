import React from 'react'
import AboutUsTopSection from '../components/about-us-top-section/about-us-top-section'
import AboutUsCoFounder from '../components/about-us-cofounder/about-us-cofounder'
import CoFounderImage from '../utilities/co-founder-image.png'
import FounderImage from '../utilities/founder-image.png'
import Counter from '../components/counter/counter'

function AboutUs() {
  return (
    <main className="">
      <AboutUsTopSection />
      <AboutUsCoFounder
        heading={'Meet Our Co-Founder Vikas Alagarsamy'}
        text={
          "A techie with a charm for photography, making mundane moments magical. The founder of Zero Gravity photography, who has set milestones and trends, created an international standard in the Indian photography industry is now venturing into the most delicate genre of photography curated especially for people who are in love with the aesthetics of art.  One of a Kind photography is the brainchild of Vikas Alagarsamy. OOAK photography is a dream set in action to give you a one of a kind photography experience. OOAK photography is a fusion of artistic photography and photojournalism brought together to make you relive the beautiful moments of your life. Once a techie is always a techie as OOAK photography would be the industry's first to have a completely auto-piloted photography company. His futuristic vision has helped OOAK to achieve the tech advancement in the industry meeting international requirements. Vikas has introduced AI in post-processing which makes all our deliverables are consistent and meet international standards without compromising."
        }
        image={CoFounderImage}
      />
      <p className="w-[95%] max-w-[1150px] mx-auto mt-[6.5rem] leading-[30px] px-8 md:px-0">
        We are based in the cultural capital of India, with deep-rooted
        traditions and long heritage. With a handful of palaces and a
        breathtaking natural landscape, this dream place has made us take
        advantage of the best things our country has to offer. Choosing us for
        our Destination Wedding will surely mean a dream experience for you. We
        love to make the best out of our country’s unique light and beautiful
        landscapes but to photograph abroad is a challenge we embrace with a
        great spirit of adventure! We will travel the world to capture Love,
        wherever we may find it!
      </p>

      <AboutUsCoFounder
        heading={'Meet Our Founder Navya'}
        text={
          "Handling toddlers to running a business, there is nothing that a mom can’t do. Pursuing a Ph.D. with a Masters in Early Childhood Education and Administration, having in hand a decade of experience with corporate giants-like JP Morgan and Chase, Accenture, and Target. Owning a business of my own is an innate dream. My dream rejuvenated when Vikas came in with the idea of establishing a corporate photography company, where I could aline my thoughts with his vision and support in the creative aspects of a business. Prior experience in Corporate firms helps me to bring orderliness, a set process, and a system to One Of a Kind photography. Looking at the aesthetic aspects of storytelling through photographs is what the industry is lacking, OOAk will definitely be a game-changer in the industry.  I won't stop until I see what I visualize being put to practice!"
        }
        image={FounderImage}
      />
      <Counter />
    </main>
  )
}
export default AboutUs
