import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./form.css";

const campaignOptions = [
    { id: 1,cid : 808, name: 'Campaign 1' },
    { id: 2,cid : 809, name: 'Campaign 2' },
    { id: 3,cid : 810, name: 'Campaign 3' },
  ];


const MyForm = () => {
  const url = "http://localhost:5000";
  const [formData, setFormData] = useState({
    callDateFrom: "",
    callDateTo: "",
    phoneNumber: "",
    volunteerNumber: "",
    campaignId: "",
    agentId: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  const data = {
    callDateFrom: formData.callDateFrom,
    callDateTo: formData.callDateTo,
    phoneNumber: formData.phoneNumber,
    volunteerNumber: formData.volunteerNumber,
    campaignId: parseInt(formData.campaignId),
    agentId: parseInt(formData.agentId),
  };
    // Destructure form data properties
    const {
      callDateFrom,
      callDateTo,
      phoneNumber,
      volunteerNumber,
      campaignId,
      agentId,
    } = data;

    // Make POST request with form data
    const resp = await axios.post(`${url}/data`, { callDateFrom, callDateTo, phoneNumber, volunteerNumber, campaignId, agentId });
    // fetchData();
    const callFromFormat = new Date(formData.callDateFrom).toLocaleDateString()
    const callToFormat = new Date(formData.callDateTo).toLocaleDateString()
    let lastId = document.getElementsByClassName("table")[0].children[1].lastChild.children[0].innerHTML
    let lll = document.getElementsByClassName("table")[0].children[1].children.length
    var lasst = document.getElementsByClassName("table")[0].children[1].children[lll-1].outerHTML
    var apend = `<tr><td>${Number(lastId) + 1}</td><td>${callFromFormat}</td><td>${callToFormat}</td><td>${formData.phoneNumber}</td><td>${formData.volunteerNumber}</td><td>${formData.campaignId}</td><td>${formData.agentId}</td></tr>`;
    document.getElementsByClassName("table")[0].children[1].children[lll-1].outerHTML = lasst+apend
    // Reset form data
    setFormData({
      callDateFrom: "",
      callDateTo: "",
      phoneNumber: "",
      volunteerNumber: "",
      campaignId: "",
      agentId: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group as={Row} className="m-1" controlId="formCallDateFrom">
            <Form.Label column sm={3}>
              Call Date From
            </Form.Label>
            <Col>
              <Form.Control
                type="date"
                name="callDateFrom"
                value={formData.callDateFrom}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group as={Row} className="m-1" controlId="formCallDateTo">
            <Form.Label column sm={3}>
              Call Date To
            </Form.Label>
            <Col>
              <Form.Control
                type="date"
                name="callDateTo"
                value={formData.callDateTo}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group as={Row} className="m-1" controlId="formPhoneNumber">
            <Form.Label column sm={3}>
              Phone Number
            </Form.Label>
            <Col>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group as={Row} className="m-1" controlId="formVolunteerNumber">
            <Form.Label column sm={3}>
              Volunteer Number
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                name="volunteerNumber"
                value={formData.volunteerNumber}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group as={Row} className="m-1" controlId="formCampaignId">
            <Form.Label column sm={3}>
              Campaign Id
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
                name="campaignId"
                value={formData.campaignId}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select a campaign</option>
                {campaignOptions.map((campaign) => (
                  <option key={campaign.id} value={campaign.cid}>
                    {campaign.cid}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Row} className="m-1" controlId="formAgentId">
            <Form.Label column sm={3}>
              Agent Id
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                name="agentId"
                value={formData.agentId}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>

      <Row className="m-2">
        <Col>
          <Row sm={5}>
            <Button variant="primary" type="submit" className="m-3">
              Submit
            </Button>
            <Button variant="secondary" type="submit" className="m-3">
              Clear
            </Button>
          </Row>
        </Col>
        <Col>
          <Row sm={5} className="m-3">
            <Col sm={6} className="p-5 pt-0 pb-0">
              <Form.Control
                type="text"
                name="someText"
                placeholder="Sometext"
                value={formData.someText}
                onChange={handleChange}
                className="form-control"
              />
            </Col>

            <Button variant="primary" type="submit">
              Save As
            </Button>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default MyForm;
