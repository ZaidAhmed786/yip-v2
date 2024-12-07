import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import FooterThree from "../layout/footers/footer";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Refund Policy"} />
      <HeaderOne />
      <Breadcrumb top_title="Refund Policy" page_title="Refund Policy" />
      <div style={{ width: "70%", margin: "20vh auto", textAlign: "left" }}>
        <h1> Refund Policy</h1>
        <p>Last Updated on May 9, 2024</p>
        <h1>Full Refund Policy</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          A full refund will be issued if you choose to cancel our services
          within 5 days of making the payment. If you terminate our services
          after the initial 5 days, you will be charged an amount equivalent to
          the working hours put into the project. The balance will be credited
          to your account within 45 days of cancellation.
        </p>
        <h1>Cancellation Policy</h1>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          Cancellation of any agreed upon service should be done 10 days prior
          to the start of the next billing cycle. Cancellations made after the
          start of the billing cycle will result in an amount equivalent to the
          working hours put into the project during that month being billable.
          If you signed up for our services but did not make use of them, you
          are still entitled to pay us. The amount of refund will be credited to
          the account from which the payment was made within 45 days of service
          cancellation.
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
          If you signed up for our services but did not make use of them, you
          are still entitled to pay us. The amount of refund will be credited to
          the account from which the payment was made within 45 days of service
          cancellation.
        </p>
      </div>
      <FooterThree />
    </Wrapper>
  );
};

export default index;
