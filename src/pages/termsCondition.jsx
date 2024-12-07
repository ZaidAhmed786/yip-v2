import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import FooterThree from "../layout/footers/footer";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Terms & Condition"} />
      <HeaderOne />
      <Breadcrumb top_title="Terms & Condition" page_title="Terms & Condition" />
      <div style={{ width: "70%", margin: "20vh auto", textAlign: "left" }}>
        <h1> Terms & Conditions</h1>
        <p>Last Updated on May 9, 2024</p>
        <h1>Use of Our Website</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          You are permitted to use this site for your own purposes to print,
          download, and share material provided you do not modify any content
          without our explicit consent. Material on this website may not be
          republished online or offline without our permission. The copyright
          and all intellectual property rights of the material on this site are
          owned by Yourinternetprovider and may not be reproduced without our
          prior consent.
        </p>
        <h1>Visitor Conduct</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          With the exception of personal information (the use of which is
          covered under our Privacy Policy), any material you send or post to
          this write shall be considered non-proprietary and not confidential.
          Unless you advise to the contrary, we remain free to copy, disclose,
          distribute, incorporate and otherwise use such material for any and
          all purposes.
        </p>

        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          When using the site, please do not post or send any material for which
          you have not obtained all necessary consents or that which is
          discriminatory, obscene, pornographic, defamatory, liable to incite
          racial hatred, in breach of confidentiality or privacy to or from this
          site, which may cause annoyance or inconvenience to others, which
          encourages or constitutes conduct that would be deemed a criminal
          offense, give rise to a civil liability, or otherwise is contrary to
          the law of the United States of America.
        </p>

        <h1>Site Activity</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          We take the utmost care to ensure that this site is available 24/7,
          365 days per year. However, websites do sometimes encounter downtime
          due to server or technical issues. We are not liable if this website
          is unavailable at any time.
        </p>
        <h1>Links to and from other Websites</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          In order to provide additional information or services, Yourinternetprovider may include links to external websites. Clicking on such a
          link will navigate you away from the Digital Marketing Agencies site.
          The inclusion of links does not necessarily imply a recommendation,
          nor does it in any way endorse the views expressed within them. Other
          site’s Terms and Conditions may differ from our own. When clicking off
          the Yourinternetprovider site, we strongly encourage you to visit the
          other site’s Terms and Conditions to ensure it meets the standards of
          your own personal preferences.
        </p>
        <h1>Exclusion of Liability</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          In no event will Yourinternetprovider be held liable for any loss or
          damage of information including but not limited to indirect or
          consequential loss or damage, loss or damage of data, or profits
          arising out of or in connection with the use of this website. Yourinternetprovider may not be held liable or responsible in any way for loss or
          damage that may result to you or a third party as a result of your use
          of our website.
        </p>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          We take the utmost measures to ensure that the information provided on
          this site is correct, however; we do not make any guarantees regarding
          that information. This exclusion shall include servicing or repair
          costs and, without limitation, any other direct, indirect or
          consequential loss.
        </p>
        <h1>Governing Law</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          These legal Terms and Conditions apply for all issues regarding this
          website shall be governed by the laws of the United States of America
          and in the state of New Mexico or the appropriate defending country.
        </p>
      </div>
      <FooterThree />
    </Wrapper>
  );
};

export default index;
