import { ethers } from "ethers";
import { PROVIDER, governanceAddres } from "./addresses";
import governanceABI from "./GovernanceAbi.json";
import axios from "axios";

let provider = new ethers.JsonRpcProvider(PROVIDER);
let CONTRACT = new ethers.Contract(governanceAddres, governanceABI, provider);

const _errorFunc = ({ error, message, setLoading, loading }) => {
  //   console.log(error);
  setLoading(loading);
};

export const _getVotersAll = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let votersData = await CONTRACT.getAllVoters();
    return votersData;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getVoter = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let voter = await CONTRACT.getVoter();
    return voter;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getCandidates = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let candidates = await CONTRACT.getAllCondidates();
    return candidates;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getElections = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let elections = await CONTRACT.getAllElections();
    return elections;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _getElection = async ({
  loading,
  setLoading,
  electionId,
  year,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    let election = await CONTRACT.getAllElection(electionId, year);
    return election;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _hasMinted = async ({ loading, setLoading, electionId, year }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let mintedBool = await CONTRACT.hasMinted(year, electionId);
    return mintedBool;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _isVerified = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    let verifiedBool = await CONTRACT.isVerified();
    return verifiedBool;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _vote = async ({
  loading,
  setLoading,
  year,
  electionId,
  tokenAddress,
  value,
  startDate,
  endDate,
  candidateId,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.vote(
      year,
      electionId,
      tokenAddress,
      value,
      startDate,
      endDate,
      candidateId
    );
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _addVoter = async ({ loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.addVoter();
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _mint = async ({
  year,
  _electionId,
  _tokenAddr,
  loading,
  setLoading,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.mint(year, _electionId, _tokenAddr);
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

//// ADMIN
export const _verifyVoter = async ({ voterAddress, loading, setLoading }) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.verifyVoter(voterAddress);
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _createCandidate = async ({
  year,
  candidateId,
  name,
  imageURI,
  position,
  about,
  loading,
  setLoading,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.createCandidate(
      year,
      candidateId,
      name,
      imageURI,
      position,
      about
    );
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _createElection = async ({
  year,
  _name,
  _electionId,
  _startDate,
  _endDate,
  loading,
  setLoading,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.createCandidate(
      year,
      _name,
      _electionId,
      _startDate,
      _endDate
    );
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

export const _addCandidate = async ({
  loading,
  setLoading,
  _electionId,
  _startDate,
  _year,
}) => {
  try {
    // Now you can call the functions of the CONTRACT
    await CONTRACT.addCandidate(_electionId, _startDate, _year);
    return true;
  } catch (error) {
    console.log(error);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
    return false;
  }
};

const API = `http://localhost:3001/api`;

///////////////////////////// API'S //////////////////////////////
export const _signInVoter = async ({
  loading,
  setLoading,
  voterWalletAddress,
  fullName,
  country,
  ID,
  phoneNumber,
  password,
  navigate,
  setError,
}) => {
  try {
    const response = await axios.post(`${API}/voter/sign-up`, {
      voterWalletAddress,
      fullName,
      country,
      ID,
      phoneNumber,
      password,
    });
    window.localStorage.setItem("user", JSON.stringify(response.data));

    navigate("/");
    return response.data;
  } catch (error) {
    console.log(error);
    setError(error.respponse.data.message);

    _errorFunc({
      error: error,
      message: "Something occured",
      loading,
      setLoading,
    });
  }
};

export const _loginVoter = async ({
  voterWalletAddress,
  password,
  navigate,
  setError,
  setLoading,
}) => {
  try {
    const response = await axios.post(`${API}/voter/sign-in`, {
      voterWalletAddress,
      password,
    });

    window.localStorage.setItem("user", JSON.stringify(response.data));
    navigate("/");

    return response.data;
  } catch (error) {
    console.log(error);
    setError(error.response.data.message);
    _errorFunc({
      error: error,
      message: "Something occured",
      loading: false,
      setLoading: setLoading,
    });
  }
};
