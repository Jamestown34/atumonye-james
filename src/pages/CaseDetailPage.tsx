import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const CaseDetailPage = () => {
  const { caseId } = useParams();

  const caseDetails = {
    "drug-expiry": {
      title: "Pharmacy Expiry Tracker for Urchman Pharmacy & Stores",
      description: `
**Client**  
Urchman Pharmacy & Stores Nigeria is a rural-based pharmaceutical retail store committed to serving its local community with quality healthcare products.

📷 ![Form Input](/images/cases/drug-expiry.png)

**Problem**  
They relied on notebooks and memory to track expiry dates. This led to health risks, wasted inventory, and compliance issues.

**Solution**  
We built a full-stack expiry tracker using **Streamlit** + **Supabase**. Features include:
- Manual inventory entry
- Expiry alerts & batch summary
- One-click CSV report download

📷 ![Dashboard Summary](/images/cases/drug-expiry1.jpg)

**Results**  
- 100% reduction in expired stock  
- Improved compliance and reporting  
- Empowered rural staff with zero technical knowledge

📷 ![Form Input](/images/cases/drug-expiry2.jpg)

**Tools Used**  
Streamlit, Supabase, PostgreSQL, Python

📷 ![Form Input](/images/cases/drug-expiry3.jpg)
      `,
    },

    "sales-dashboard": {
      title: "Sales Dashboard for a Business Organization",
      description: `
**Client**  
Alonso Business Inc., United States

📷 ![Dashboard](/images/cases/sales-dashboard.png)

**Problem**  
Their sales team lacked real-time visibility into KPIs across territories and timeframes.

**Solution**  
We created a live Power BI dashboard tracking:
- Monthly, daily, and territory performance
- Sales by category, region, and rep
- Real-time metrics for leadership

📷 ![Dashboard](/images/cases/sales-dashboard2.png)

**Impact**  
- 2× faster sales reporting  
- Smarter team decision-making

**Tools Used**  
Power BI, Excel, SQL
      `,
    },

    "return-analysis": {
      title: "Customer Return Analysis for Online Retail",
      description: `
**Client**  
Lusty Chic Wears, United Kingdom

📷 ![Return Dashboard](/images/cases/Return-Analysis1.png)

**Problem**  
They faced high return rates hurting margins and customer experience.

**Solution**  
We built a logistic regression model and dashboard to:
- Predict return likelihood
- Spot risky SKUs
- Guide improvements in product and logistics

**Results**  
- 18% reduction in avoidable returns  
- Better logistics and happier customers

📷 ![Return Dashboard](/images/cases/Return-Analysis2.png)

**Tools Used**  
Python, Logistic Regression, Tableau
      `,
    },

    "truck-eval": {
      title: "Fleet Decision Dashboard for Spotter Transportation",
      description: `
**Client**  
Spotter is a U.S.-based long-haul transportation company managing a large fleet across multiple states.

📷 ![Fleet Evaluation Summary](/images/cases/truck1.png)

**Problem**  
The company faced growing repair costs and underutilized trucks. Without integrated analytics, they struggled to decide which trucks to keep, sell, or inspect — risking unnecessary spend and compliance issues.

**Solution**  
We built a data-driven fleet evaluation model using **Python + Excel Dashboarding**. The analysis integrated 6 internal datasets and Truck Paper listings to:
- Score every truck by maintenance, mileage, resale, and usage
- Recommend **Keep / Sell / Inspect**
- Export audit-ready reports with reasoning for each decision

📷 ![Spotter Dashboard View](/images/cases/truck2.png)

**Results**  
- 102 trucks flagged for sale — $1.1M in avoidable repairs  
- 61 trucks validated to keep in rotation  
- 120 flagged for inspection due to data gaps or borderline metrics  
- Gave execs clear insight into fleet health in one glance

📷 ![Spotter Dashboard View](/images/cases/truck3.png)

**Tools Used**  
Python (Pandas), Excel, Truck Paper® Listings
      `,
    },

    "afrimarket-risk": {
      title: "E-Commerce Seller Risk Framework for AfriMarket (Nigeria & Ghana)",
      description: `
**Client**  
AfriMarket is a fast-scaling online marketplace operating across Nigeria and Ghana, similar to Jumia. Facing a spike in user complaints, fake reviews, and poor delivery experiences, they needed urgent backend intelligence to restore buyer trust.

📷 ![Complaint Heatmap & Delay View](/images/cases/e_commerce2.png)

**Problem**  
Customer satisfaction was tanking despite record site traffic. High return rates, sketchy sellers, and fraudulent 5-star reviews were damaging brand reputation. The Lagos warehouse's overload further distorted delivery data, making trust analysis difficult.

**Solution**  
We led a full data intelligence audit across a 3-month transaction log using **Python + Streamlit + Machine Learning** to:

- Clean & normalize noisy data (seller names, categories, city labels)  
- Engineer key trust signals like:  
  - 🚚 Delivery Delay  
  - 🔁 Return Rate  
  - 😡 Complaint Rate  
  - 🤖 Review Fraud Flags  
- Build a **Seller Risk Score** and train a classifier to predict high-return risks  
- Deliver a dashboard highlighting sellers to suspend, categories to watch, and delay hotspots  

📷 ![Risk Dashboard Overview](/images/cases/e_commerce1.png)  

**Results**  
- Suspicious seller list generated based on returns, fake reviews & complaints  
- Top-5 categories linked to >70% of delivery complaints  
- Verified hypothesis: delivery method significantly impacts customer ratings  
- Rebuilt customer trust framework & policy to flag future risk early

📷 ![Top Seller & Category Risk Report](/images/cases/e_commerce3.png)

**Tools Used**  
Python (Pandas, scikit-learn, Streamlit), Matplotlib/Seaborn, Power BI, NLP (TF-IDF for review fraud detection)
      `,
    },
  };

  const caseDetail = caseDetails[caseId];

  if (!caseDetail) {
    return <div className="p-10 text-center text-black">Case not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{caseDetail.title}</h1>
        <div className="max-w-none case-images mb-12">
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: window.innerWidth <= 768 ? "250px" : "400px",
                    height: "auto",
                    width: "auto",
                    objectFit: "contain",
                    margin: "1.5rem 0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              ),
            }}
          >
            {caseDetail.description}
          </ReactMarkdown>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gray-800 text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailPage;
