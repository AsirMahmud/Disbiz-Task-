import { Img, Tailwind } from "@react-email/components";

export const EmailTemplate2 = ({ name, comapany, phone, email }) => (
  <div>
    <Tailwind>
      <table
        width="100%"
        height="600"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style={{
          backgroundColor: "#000",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <tr>
          <td align="center" valign="middle" style={{ padding: "20px" }}>
            <table
              width="600"
              cellpadding="0"
              cellspacing="0"
              border="0"
              style={{
                backgroundColor: "#000",
                border: "1px solid #2CA15B",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <tr>
                <td align="center" style={{ position: "relative" }}>
                  <Img
                    src="https://utfs.io/f/2f079d5d-4ba3-4f9b-afda-b65134963660-xxqnqc.jpg"
                    style={{
                      width: "40px",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td align="center" style={{ paddingBottom: "10px" }}>
                  <h1
                    style={{ fontSize: "24px", color: "#2CA15B", margin: "0" }}
                  >
                    Thanks For Contacting Us 🎉
                  </h1>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  style={{ color: "#ccc", paddingBottom: "20px" }}
                >
                  We Have Collected Your Info
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#222",
                    padding: "20px",
                    borderRadius: "4px",
                  }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tr>
                      <td style={{ color: "#ccc", paddingBottom: "8px" }}>
                        <strong style={{ color: "#fff" }}>Name:</strong> {name}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#ccc", paddingBottom: "8px" }}>
                        <strong style={{ color: "#fff" }}>Company:</strong>{" "}
                        {comapany}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#ccc", paddingBottom: "8px" }}>
                        <strong style={{ color: "#fff" }}>Phone:</strong>
                        {phone}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#ccc", paddingBottom: "8px" }}>
                        <strong style={{ color: "#fff" }}>Email:</strong>{" "}
                        {email}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </Tailwind>
  </div>
);
