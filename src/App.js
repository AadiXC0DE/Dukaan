import "./App.css";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import cross from "../src/assets/cross.svg";
import search from "../src/assets/search.svg";
import select from "../src/assets/select.svg";
import standout from "../src/assets/standout.svg";
import privacy from "../src/assets/privacy.svg";
import tc from "../src/assets/tc.svg";
import domain from "../src/assets/domain.svg";
import invoice from "../src/assets/invoice.svg";
import logo2 from "../src/assets/logo2.svg";
import flag from "../src/assets/flag.svg";

function App() {
  //for printing multiple slogans
  const components = [];
  for (let i = 0; i < 20; i++) {
    components.push(<Slogan key={i} />);
  }
  return (
    <div className="bg-white">
      <Navbar />

      {/*Slogans */}

      <div className="px-6 py-12 bg-[#FAFAFA]">
        <div className="py-12 shadow mx-auto px-6 -mt-32 rounded-lg shadow-slate-200/50 bg-white w-[min(1024px,_100%)] ">
          <div className="w-[min(720px,_100%)] mx-auto flex flex-col items-start justify-start gap-6">
            <div
              className="font-Galano_semibold text-3xl
             text-black"
            >
              Free slogan maker
            </div>
            <p className="text-black/60 text-lg font-Galano">
              Simply enter a term that describes your business, and get up to
              1,000 relevant slogans for free.
            </p>
            <div className="flex-col flex items-stretch justify-start gap-2">
              <span className="text-black/60 font-Galano">
                Word for your slogan
              </span>
              <div className="border-2 border-black/20 px-2 flex flex-row items-center gap-32 justify-between focus-within:border-black/40 rounded w-[min(320px,_100%)] ">
                <input
                  className="w-full py-2 focus:outline-none"
                  placeholder="eg. lorem ipsum"
                  type="text"
                  value="cozy"
                ></input>
                <button className="py-2 grid place-items-center focus:outline-none">
                  <img src={cross} alt="cross"></img>
                </button>
              </div>
            </div>
            <button className="rounded px-4 py-2 bg-[#146EB4] text-lg text-white font-Galano my-4 ">
              Generate slogans
            </button>
            <div className="border-black/20 w-full border "></div>
            <div className="w-full flex-row flex items-center justify-between gap-2 flex-wrap">
              <p className="font-Galano_medium text-lg">
                We have generated 1,023 slogans for "cozy"
              </p>
              <button className="rounded border-[#146EB4] border px-4 py-2 text-[#146EB4] font-Galano">
                Download all
              </button>
            </div>
            <div className="w-full grid grid-rows-none sm:grid-cols-1 md:grid-cols-2 gap-4">
              {components}
            </div>
            <div className="w-full border border-black/10"></div>
            <div className="w-full flex-row flex items-center justify-between gap-4">
              <div className="flex-1 flex-row flex items-center justify-center gap-4">
                <a
                  href="#"
                  className=" font-Galano_medium rounded-full w-6 h-6 grid place-items-center bg-[#146EB4] text-white text-sm"
                >
                  1
                </a>
                <a
                  href="#"
                  className="font-Galano_medium rounded full w-6 h-6 grid place-items-center text-[#146EB4] text-sm"
                >
                  2
                </a>
                <a
                  href="#"
                  className="font-Galano_medium rounded full w-6 h-6 grid place-items-center text-[#146EB4]  text-sm"
                >
                  3
                </a>
                <a
                  href="#"
                  className="font-Galano_medium rounded full w-6 h-6 grid place-items-center text-[#146EB4]   text-sm"
                >
                  ...
                </a>
                <a
                  href="#"
                  className="font-Galano_medium rounded full w-6 h-6 grid place-items-center text-[#146EB4] text-sm"
                >
                  21
                </a>
              </div>
              <a
                href="#"
                className="flex text-[#146EB4] text-sm font-Galano_medium"
              >
                Next{String.fromCharCode(62)}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*slogan description*/}
      <div className="p-4 bg-[#146EB4]/5">
        <div className="w-[min(1024px,_100%)] mx-auto py-6 flex flex-row items-start justify-center gap-8 flex-wrap">
          <div className="max-w-[320px] flex-col flex items-center justify-start gap-2">
            <img src={search} alt="search"></img>
            <p className="font-Galano_medium text-lg">Search</p>
            <p className="text-[hsl(0,_0%,_30%)] text-center font-Galano">
              Simply add a keyword or a term related to your business in the
              slogan maker search box. wait for the magic to happen.
            </p>
          </div>
          <div className="max-w-[320px] flex-col flex items-center justify-start gap-2">
            <img src={select} alt="select"></img>
            <p className="font-Galano_medium text-lg">Select</p>
            <p className="text-[hsl(0,_0%,_30%)] text-center font-Galano">
              Choose from thousands of options generated by the slogan maker
              that fit your needs.
            </p>
          </div>
          <div className="max-w-[320px] flex-col flex items-center justify-start gap-2">
            <img src={standout} alt="standout"></img>
            <p className="font-Galano_medium text-lg">Standout</p>
            <p className="text-[hsl(0,_0%,_30%)] text-center font-Galano">
              Congrats on your new slogan. It's time to win the world!
            </p>
          </div>
        </div>
      </div>

      {/*other products section*/}
      <div className="px-4 py-12">
        <div className="w-[min(1024px,_100%)] mx-auto p-4 flex-col flex items-stretch justify-start gap-8">
          <h2 className="flex font-Galano_semibold text-3xl justify-center sm:justify-center lg:justify-start">
            Try our other free products
          </h2>
          <div className="grid grid-rows-none place-content-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-[320px] flex flex-col items-start justify-start gap-1">
              <img src={privacy} alt="privacy"></img>
              <p className="font-Galano_medium text-lg mt-2">
                Privacy Policy Generator
              </p>
              <p className="text-[hsl(0,_0%,_30%)] font-Galano">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging
              </p>
            </div>
            <div className="max-w-[320px] flex flex-col items-start justify-start gap-1">
              <img src={tc} alt="terms and conditions"></img>
              <p className="font-Galano_medium text-lg mt-2">
                Terms & Conditions Generator
              </p>
              <p className="text-[hsl(0,_0%,_30%)] font-Galano">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging
              </p>
            </div>
            <div className="max-w-[320px] flex flex-col items-start justify-start gap-1">
              <img src={domain} alt="domain"></img>
              <p className="font-Galano_medium text-lg mt-2">
                Domain Name Generator
              </p>
              <p className="text-[hsl(0,_0%,_30%)] font-Galano">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging
              </p>
            </div>
            <div className="max-w-[320px] flex flex-col items-start justify-start gap-1">
              <img src={invoice} alt="invoice"></img>
              <p className="font-Galano_medium text-lg mt-2">
                Invoice Generator
              </p>
              <p className="text-[hsl(0,_0%,_30%)] font-Galano">
                Stock your store with 100s of products and start selling to
                customers in minutes, without the hassle of inventory or
                packaging
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Footer*/}

      <div className="pt-8 pb-4 px-4 bg-[hsl(260,_11%,_11%)] text-white ">
        <div className="w-[min(1024px,_100%)] mx-auto p-4 flex flex-col items-stretch justify-start gap-8">
          <div className="flex flex-row items-start justify-between gap-8 flex-wrap">
            <div className="flex flex-col items-start justify-start gap-2">
              <img src={logo2} alt="logo" className="w-32"></img>
            </div>
            <div className="flex flex-row items-start justify-between flex-wrap gap-8 lg:gap-24">
              <div className="flex flex-col items-start justify-start gap-2">
                <a className="font-Galano" href="#">
                  Contact
                </a>
                <a className="font-Galano" href="#">
                  FAQ'S
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <a className="font-Galano" href="#">
                  Tutorials
                </a>
                <a className="font-Galano" href="#">
                  Blog
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <a className="font-Galano" href="#">
                  Privacy
                </a>
                <a className="font-Galano" href="#">
                  Banned Items
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <a className="font-Galano" href="#">
                  About
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center just-start gap-2"
                >
                  <span className="font-Galano">Jobs</span>
                  <span className="rounded-full w-5 h-5 bg-white text-black text-sm leading-none grid place-items-center font-Galano">
                    4
                  </span>
                </a>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <a className="font-Galano" href="#">
                  Facebook
                </a>
                <a className="font-Galano" href="#">
                  Twitter
                </a>
                <a className="font-Galano" href="#">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/30"></div>
          <div className="text-sm flex-row flex items-center justify-between gap-2 flex-wrap">
            <p className="font-Galano">Dukaan 2023, All rights reserved.</p>
            <div className="flex-row flex items-center justify-end gap-2">
              <p className="font-Galano">Made in</p>
              <img src={flag} alt="India flag"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
