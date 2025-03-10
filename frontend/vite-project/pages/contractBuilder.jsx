import React, { useState } from "react";
import chatWithAI from "../services/aiService";
import "../src/App.css";

const ContractBuilder = () => {
    const [fields, setFields] = useState({});
    const [contract, setContract] = useState("");
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFields({ ...fields, attachments: e.target.files });
    };

    const generateContract = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = `Draft a legally sound contract with the following titles without markdown symbols:
    Title: ${fields.title}
    Type: ${fields.type}
    First Party: ${fields.firstPartyName}
    Address: ${fields.firstPartyAddress}
    Phone: ${fields.firstPartyPhone} 
    Email: ${fields.firstPartyEmail}
    Second Party: ${fields.secondPartyName}, Address: ${fields.secondPartyAddress}
    Agreement Date: ${fields.agreementDate}, Start Date: ${fields.startDate}, End Date: ${fields.endDate}
    Key Objectives: ${fields.keyObjective}
    Scope of Work: ${fields.scopeOfWork}
    Deliverables (1st Party): ${fields.deliverables1st}
    Roles (1st Party): ${fields.roles1st}
    Deliverables (2nd Party): ${fields.deliverables2nd}
    Roles (2nd Party): ${fields.roles2nd}
    Governing Law: ${fields.governingLaw}
    Termination Clause: ${fields.terminationClause}
    with 300 words`;

    const response = await chatWithAI("gemini-2.0-flash", prompt);
    setContract(response);
    setLoading(false);

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-6">
            <div className="w-full max-w-3xl bg-zinc-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-zinc-200 mb-4 text-center">Contract Builder+</h2>

                <form onSubmit={generateContract}>
                    {/* Input Fields */}
                    <label className="block text-zinc-300">Title of Agreement*</label>
                    <input name="title" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Type of Agreement*</label>
                    <input name="type" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Full Name of First Party*</label>
                    <input name="firstPartyName" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Full Address of First Party*</label>
                    <input name="firstPartyAddress" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">First Party Phone Number*</label>
                    <input name="firstPartyPhone" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">First Party Email ID*</label>
                    <input name="firstPartyEmail" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">1st Party Full Legal Company Name (if applicable)</label>
                    <input name="firstPartyCompanyName" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">1st Party Company Registration Number (if any)</label>
                    <input name="firstPartyCompanyNumber" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Full Name of Second Party*</label>
                    <input name="secondPartyName" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Full Address of Second Party*</label>
                    <input name="secondPartyAddress" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">2nd Party Full Legal Company Name (if applicable)</label>
                    <input name="secondPartyCompanyName" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">2nd Party Company Registration Number (if any)</label>
                    <input name="secondPartyCompanyNumber" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Third-Party & Fourth-Party Details (if applicable):</label>
                    <input name="thirdFourthPartyDetail" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    {/* Date Pickers */}
                    <label className="block text-zinc-300">Agreement Date*</label>
                    <input type="date" name="agreementDate" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Duration of Agreement*</label>
                    <input name="durationOfAgreement" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Start Date*</label>
                    <input type="date" name="startDate" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">End Date*</label>
                    <input type="date" name="endDate" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Key Objectives/Purpose of Agreement*</label>
                    <input name="keyObjective" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Scope of Work or Services Provided*</label>
                    <input name="scopeOfWork" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Deliverables Expected from 1st Party*</label>
                    <input name="deliverables1st" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Roles and Responsibilities of 1st Party*</label>
                    <input name="roles1st" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Deliverables Expected from 2nd Party*</label>
                    <input name="deliverables2nd" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Roles and Responsibilities of 2nd Party*</label>
                    <input name="roles2nd" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Deliverables Expected from 3rd and 4th Party (if applicable)</label>
                    <input name="ExpectedFrom3&4Party" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Roles and Responsibilities of 3rd and 4th Party (if applicable)</label>
                    <input name="roleOf3&4Party" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Revenue Sharing Percentage (if applicable)</label>
                    <input name="rvenue" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Total Payment Amount (if fixed)</label>
                    <input name="paymentAmount" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Payment Structure (e.g., monthly, quarterly, one-time)</label>
                    <input name="paymentStructure" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Payment Due Dates</label>
                    <input name="paymentDueDate" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Bank Details for Payment (if needed)</label>
                    <input name="bankDetailPayment" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Penalty Clause for Late Payment</label>
                    <input name="penaltyLatePayment" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Termination Clause Conditions*</label>
                    <input name="terminationClause" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Notice Period for Termination*</label>
                    <input name="noticePeriod" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Dispute Resolution Process (e.g., arbitration, mediation)*</label>
                    <input name="disputeProcess" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">High Court City?*</label>
                    <input name="highCourCity" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Governing Law and Jurisdiction*</label>
                    <input name="governingLaw" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Non-Disclosure Agreement Clause?*</label>
                    <input name="NDAClause" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Intellectual Property Rights (IPR) Clause?*</label>
                    <input name="IPRClause" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Details on Ownership of IP Created During Agreement</label>
                    <input name="detailsOnOwnership" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Non-Compete Clause (if applicable)</label>
                    <input name="NCClause" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Insurance Requirements (if any)</label>
                    <input name="insurance" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Indemnification Clauses (specify any liabilities)</label>
                    <input name="indemnificationClause" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Confidentiality Clause Terms</label>
                    <input name="confidentialityClause" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Amendment Procedure (how to make changes to the agreement)*</label>
                    <input name="amendmentProcedure" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <label className="block text-zinc-300">Non-Solicitation Clause (if applicable)</label>
                    <input name="NSClause" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Signatory Requirements (individuals authorized to sign)</label>
                    <input name="signatoryRequirement" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Document Retention Period (if applicable)</label>
                    <input name="rententionPeriod" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    <label className="block text-zinc-300">Performance Metrics or Benchmarks (if required)</label>
                    <input name="performanceMetrics" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" />

                    {/* File Upload */}
                    <label className="block text-zinc-300">List of Attachments</label>
                    <div className="file-upload border-2 border-dashed border-zinc-500 p-4 rounded-lg text-center cursor-pointer hover:bg-zinc-700">
                        <input type="file" multiple onChange={handleFileChange} className="hidden" id="fileUpload" />
                        <label htmlFor="fileUpload" className="cursor-pointer">Drop files here or <span className="text-blue-400 underline">browse</span></label>
                    </div>

                    <label className="block text-zinc-300">Additional Notes or Special Terms*</label>
                    <input name="additionalNotes" onChange={handleChange} className="input bg-zinc-700 text-white p-2 rounded mb-2 w-full" required />

                    <button type="submit" disabled={loading} className="button bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded w-full mt-4">
                        {loading ? "Generating..." : "Generate"}
                    </button>

                    {/* Display Result */}
                    {contract && (
                        <div className="mt-4 p-4 bg-zinc-700 rounded-lg text-gray-300">
                            <h3 className="text-xl font-semibold mb-2">
                                Contract Summary
                            </h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: contract.replace(/\n/g, "<br>"),
                                }}
                            />
                        </div>
                    )}

                </form>
            </div>
        </div>
    );
};

export default ContractBuilder;
