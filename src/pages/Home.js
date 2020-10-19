import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import placeholder from '../assets/restaurant.svg';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "AIzaSyDM5zeWpaPPaPnaNFysmh81nNN9I1G3kac";

function Home() {
  const [searchData, setSearchData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const testData = [
    {
      business_status: "OPERATIONAL",
      formatted_address:
        "146/6 หมู่5 ซอยศาลายา5, 1, Salaya, Phutthamonthon District, Nakhon Pathom 73170, Thailand",
      geometry: {
        location: {
          lat: 13.7977109,
          lng: 100.3280136,
        },
        viewport: {
          northeast: {
            lat: 13.79904332989272,
            lng: 100.3293576298927,
          },
          southwest: {
            lat: 13.79634367010728,
            lng: 100.3266579701073,
          },
        },
      },
      icon:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      name: "Zumo Grill",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 2976,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/112843870064517050627"\u003eครองขวัญ เย็นภิญโญสุข\u003c/a\u003e',
          ],
          photo_reference:
            "CmRaAAAAQLXzn10XEIWaX5-Y8j36DRDdwZ_ac773wf2zrHHn2-bGH1Wz1EQxYDSLTTTfcWNiVAfzIA8R7p9vVp2w87kheIsLqzfTJFGpzglyLA05fy6MsbeRmgkRHjtoT_isNAgHEhDiZ0XQ9ms9FmEVwG0U7vtcGhQsJ2dCbI_NqrkXtWX3ATD6iUlOcQ",
          width: 3968,
        },
      ],
      place_id: "ChIJM_PAzviT4jARrbXQUr-xJuA",
      plus_code: {
        compound_code: "Q8XH+36 Salaya, Phutthamonthon District, Nakhon Pathom",
        global_code: "7P52Q8XH+36",
      },
      rating: 4.1,
      reference: "ChIJM_PAzviT4jARrbXQUr-xJuA",
      types: ["restaurant", "food", "point_of_interest", "establishment"],
      user_ratings_total: 115,
    },
    {
      business_status: "OPERATIONAL",
      formatted_address:
        "อาคาร แอมพาร์ค 353 ซอย จุฬา 9 Wang Mai, Pathum Wan District, Bangkok 10330, Thailand",
      geometry: {
        location: {
          lat: 13.7400683,
          lng: 100.5251503,
        },
        viewport: {
          northeast: {
            lat: 13.74151112989272,
            lng: 100.5265166298927,
          },
          southwest: {
            lat: 13.73881147010728,
            lng: 100.5238169701073,
          },
        },
      },
      icon:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      name: "KING GRILL",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3024,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/101117644499812414401"\u003eAmazeme\u003c/a\u003e',
          ],
          photo_reference:
            "CmRaAAAA91sBnkzMtmkMbtYqIQFDOyHK4rqetByP_75OQ38nNKY8M6xx7g8gJINi9gZbzdBk3tNt3TA_XcswYvDQi-QbgOUQk8BaVvSHWrkEXClQR-eD4MFqBDBx6WWU-o3angfbEhCSWOQxYrN4LvvSUpXNfHzsGhTrYdubnQ9W2wA0i0DJ8HNI7Pg5Nw",
          width: 4032,
        },
      ],
      place_id: "ChIJp6G08yuZ4jAR2CC8lIoAda8",
      plus_code: {
        compound_code: "PGRG+23 Bangkok",
        global_code: "7P52PGRG+23",
      },
      rating: 4.5,
      reference: "ChIJp6G08yuZ4jAR2CC8lIoAda8",
      types: ["restaurant", "food", "point_of_interest", "establishment"],
      user_ratings_total: 88,
    },
    {
      business_status: "OPERATIONAL",
      formatted_address:
        "Phairin Alley, Bang Bua Thong, Bang Bua Thong District, Nonthaburi 11110, Thailand",
      geometry: {
        location: {
          lat: 13.9382588,
          lng: 100.404516,
        },
        viewport: {
          northeast: {
            lat: 13.93960102989272,
            lng: 100.4058761298927,
          },
          southwest: {
            lat: 13.93690137010728,
            lng: 100.4031764701073,
          },
        },
      },
      icon:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      name: "Mr.uk Grill",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 2448,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/109050261652051815839"\u003eA Google User\u003c/a\u003e',
          ],
          photo_reference:
            "CmRaAAAArHHoPl5IplO__LgiV5glfkPNcrvhpeswZJaynj_InR75YIKLGmGnZDcs626o-wYkzL_wwg-fhGmfiza1kdE_hcilqmRb87t7JlskH7a-GBshrT8vBYxFOaH0qiTeaYrUEhD72vTxxgadsZIZy_8CeeYUGhRKfI95yo3pTzmN9g8rFT14o159lw",
          width: 3264,
        },
      ],
      place_id: "ChIJ--KbQhqP4jARLwa-uz447UY",
      plus_code: {
        compound_code:
          "WCQ3+8R Bang Bua Thong, Bang Bua Thong District, Nonthaburi",
        global_code: "7P52WCQ3+8R",
      },
      rating: 4.4,
      reference: "ChIJ--KbQhqP4jARLwa-uz447UY",
      types: ["restaurant", "food", "point_of_interest", "establishment"],
      user_ratings_total: 12,
    },
    {
      business_status: "OPERATIONAL",
      formatted_address:
        "Kanchanaphisek Rd, Sao Thong Hin, Bang Yai District, Nonthaburi 11140, Thailand",
      geometry: {
        location: {
          lat: 13.8779047,
          lng: 100.4104669,
        },
        viewport: {
          northeast: {
            lat: 13.87925197989272,
            lng: 100.4115921298927,
          },
          southwest: {
            lat: 13.87655232010728,
            lng: 100.4088924701073,
          },
        },
      },
      icon:
        "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      name: "Hungry Nerd",
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3024,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/109794826438884336473"\u003eChupadsakarn Phongwasin\u003c/a\u003e',
          ],
          photo_reference:
            "CmRaAAAA0T7cS4nx6nB5AviYWjkYZ5z0GeSV8-DjjC3wGYViqLSD3pwUs2nb-Q7vwdiZgpE-RR5h9NMEhA48xmGbb46d_Hf6TL-Cl7edqcaBMQst_Cf1ooSTYiFbVyXMSrvxKz7VEhDupL3UKaFdPDd2Mqrypbf8GhSLi1BdS-pWHmDkyObZoqbRNwaIGg",
          width: 4032,
        },
      ],
      place_id: "ChIJEcRAp9iP4jARK_9k5qH12fI",
      plus_code: {
        compound_code: "VCH6+55 Sao Thong Hin, Bang Yai District, Nonthaburi",
        global_code: "7P52VCH6+55",
      },
      rating: 4.3,
      reference: "ChIJEcRAp9iP4jARK_9k5qH12fI",
      types: ["restaurant", "food", "point_of_interest", "establishment"],
      user_ratings_total: 45,
    },
  ];

  const restaurantSearch = async (query) => {
    const params =
      "" +
      "input=" +
      encodeURI(query) +
      "&" +
      "type=" +
      "restaurant" +
      "&" +
      "location=" +
      "point:13.893992,100.516288" +
      "&" +
      "radius=" +
      "5000" +
      "&" +
      //  'fields=' + 'photos,name,rating,formatted_address,types,geometry' + '&' +
      "key=" +
      apiKey;
    const url = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
    console.log(url + params);
    setIsError(false);
    setIsLoading(true);
    const response = await fetch(proxyUrl + url + params);
    if (response.status === 200) {
      console.log("FETCH: SUCCESS");
      const data = await response.json();
      console.log(data);
      setSearchData(data.results);
      setIsError(false);
      setIsLoading(false);
    } else {
      setIsError(true);
      setIsLoading(false);
      console.log("FETCH: ERROR");
      console.log(response);
    }
  };

  const renderList = () => {
    //console.log(searchData)
    return (
      searchData &&
      searchData.map((item, index) => (
          <div key={index} style={styles.listCard}>
            <div style={styles.row}>
              <a href="/jenosize" >
              { item.photos
                ? (
                  <img src={"https://maps.googleapis.com/maps/api/place/photo?photoreference=" + item.photos[0].photo_reference + "&maxwidth=200&maxheight=200&key=" + apiKey} style={{borderRadius: 12}} />
                ) 
                : (
                  <img src={placeholder} width={200} height={200} style={{borderRadius: 12}} />
                )
              }
                </a>
              <div style={{marginLeft: 10}}>
                <a href="/jenosize" >
                  <h1 style={styles.name}>{item.name}</h1>
                </a>
                <div style={styles.descContainer}>
                  <span style={styles.rating, item.rating >= 4 ? styles.ratingHot : styles.ratingNormal}><span style={styles.header}>{'Rating:'}</span>{item.rating}</span>
                  <p style={styles.desc}>{item.formatted_address}</p>
                </div>
              </div>
            </div>
          </div>
      ))
    );
  };

  // didmount
  useEffect(() => {
    document.title = "Page Search";
    setSearchData(testData)
    //restaurantSearch('')
  }, []);

  return (
    <>
      <Header onSubmitSearch={restaurantSearch} />
      <div className="container" style={styles.container}>
        {renderList()}
        {isError && (
          <div style={{marginTop:100}}>
            <p style={{fontSize: '2rem'}}>Something went wrong!, Please try again.</p>
          </div>
        )}
      </div>
      <Footer />
      {isLoading && (
        <div style={styles.loading}>
          <p style={styles.loadingText}>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Home;

var styles = {
  container: {
    marginBottom: 80,
  },
  listCard: {
    //height: 150,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 8,
    borderColor: "#000",
    marginTop: 20,
    color: '#000',
    //backgroundColor: 'beige'
  },
  row: {
    display: 'flex',
  },
  name: {
    fontSize: 24,
    color: '#f00',
    fontWeight: 'bold',
  },
  descContainer: {
    paddingLeft: 5,
  },
  header: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
  },
  desc: {
    fontSize: 14,
    color: '#000',
  },
  rating: {
    //fontSize: 20,
    //color: '#faa',
    fontWeight: 'bold',
  },
  ratingHot: {
    fontSize: 20,
    color: '#f00',
    fontWeight: 'bold',
  },
  ratingNormal: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  loading: {
    display: 'flex',
    backgroundColor: '#0008',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    left: 0,
    top: 0,
    zIndex: 9999,
  },
  loadingText: {
    alignSelf: 'center',
    width: '100vw',
    textAlign: 'center',
    color: '#fff',
    fontSize: 32,
  },
};
