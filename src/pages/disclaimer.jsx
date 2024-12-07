import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import FooterThree from "../layout/footers/footer";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"disclaimer"} />
      <HeaderOne />
      <Breadcrumb top_title="Disclaimer" page_title="disclaimer" />
      <div style={{ width: "70%", margin: "20vh auto", textAlign: "center" }}>
        <h1> Disclaimer:</h1>

        <p
          style={{
            fontWeight: "400",
            fontSize: "22px",
            lineHeight: 2,
            color: "#838383",
            marginBottom: "28px",
          }}
        >
          Yourinternetprovider is not responsible for any content, code, or any
          other inaccuracies. Yourinternetprovider makes no guarantees. In no
          event shall Yourinternetprovider be liable for any special, direct,
          indirect, consequential, or incidental damages or any damages whether
          in an action of contract, negligence or other tort arising out of or
          in connection with the use of the Service or the contents of the
          Service. Yourinternetprovider reserves the right to make additions,
          deletions, or modification to the contents of the Service at any time
          without prior notice. The Yourinternetprovider Service and its content
          are provided "as is" and "as available" without any warranty or
          representations of any kind, either express or implied. Yourinternetprovider
           is a distributor and not a publisher of content provided by third
          parties; as such, Yourinternetprovider exercises no editorial control
          over such content and makes no warranty or representation as to the
          accuracy, reliability, or currency of any information, content,
          services, or merchandise provided or accessible through the Yourinternetprovider Service. Without limiting the foregoing, Yourinternetprovider
          specifically disclaims all warranties and representations in any
          content transmitted on or in connection with the Yourinternetprovider
          Service or on sites that may appear as links on the Yourinternetprovider
          Service, or in the products provided as part of or in connection with
          the Yourinternetprovider Service, including without limitation any
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement of third-party rights. No oral advice or written
          information given by Yourinternetprovider, nor its affiliates,
          employees, officers, directors, agents, or the like shall create a
          warranty. Pricing and availability information is subject to change
          without notice. Without limiting the foregoing, Yourinternetprovider
          does not warrant that the Yourinternetprovider Service will be
          uninterrupted, uncorrupted, timely, or error-free.
        </p>
      </div>
      <FooterThree />
    </Wrapper>
  );
};

export default index;
