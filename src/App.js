import logo from './logo.svg';
import './App.css';
import Card from './Card'


function App() {

  let cardList = [
    {
      plan: "FREE",
      price: 0,
      currency: "$",
      period: "month",
      features: [{
        name: "Single User",
        enable: true
      },
      {
        storage: "5GB",
        enable: true
      },
      {
        name: "Unlimited Public Projects",
        enable: true
      },
      {
        name: "Community Access",
        enable: true
      },
      {
        name: "Unlimited Private Projects",
        enable: false
      },
      {
        name: "Dedicated Phone Support",
        enable: false
      },
      {
        name: "Free Subdomain",
        enable: false
      },
      {
        name: "Monthly Status Reports",
        enable: false
      }
      ]
    },

    {
      plan: "PLUS",
      price: 9,
      currency: "$",
      period: "month",
      features: [{
        name: "5 Users",
        enable: true,
        isStrong: true
      },
      {
        storage: "50GB Storage",
        enable: true
      },
      {
        name: "Unlimited Public Projects",
        enable: true
      },
      {
        name: "Community Access",
        enable: true
      },
      {
        name: "Unlimited Private Projects",
        enable: true
      },
      {
        name: "Dedicated Phone Support",
        enable: true
      },
      {
        name: "Free Subdomain",
        enable: true
      },
      {
        name: "Monthly Status Reports",
        enable: false
      }
      ]
    },


    {
      plan: "PRO",
      price: 49,
      currency: "$",
      period: "month",
      features: [{
        name: "Unlimited Users",
        enable: true,
        isStrong: true
      },
      {
        storage: "150GB Storage",
        enable: true
      },
      {
        name: "Unlimited Public Projects",
        enable: true
      },
      {
        name: "Community Access",
        enable: true
      },
      {
        name: "Unlimited Private Projects",
        enable: true
      },
      {
        name: "Dedicated Phone Support",
        enable: true
      },
      {
        name: "Free Subdomain",
        enable: true
      },
      {
        name: "Monthly Status Reports",
        enable: true
      }
      ]
    }
  ];


  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            cardList.map((obj) => {
              return <Card data={obj}></Card>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
