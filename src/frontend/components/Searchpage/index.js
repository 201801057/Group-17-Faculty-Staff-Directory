import React, { useEffect, useState } from "react";
import ProfileCard from "../ProfileCard";
import "./styles.css"
import { db } from "../../../firebase.js";

function Searchpage(props) {

  const [dataList, setDataList] = useState([]);
  const [searchText, setSearchText] = useState(props.searchName);
  const [data, setData] = useState(dataList);


  useEffect(() => {
    db.collection("Prof").get().then((q) => {
      var list = [];
      q.forEach((doc) => {
        const x = doc.data();
        list.push(x);
      });
      setDataList(list);

      const lowercasedValue = props.searchName.toLowerCase().trim();
      if (lowercasedValue === "") setData(list);
      else {
        const filteredData = list.filter(item => {
          return Object.keys(item).some(key =>
            item[key]
              .toString()
              .toLowerCase()
              .includes(lowercasedValue)
          );
        });
        setData(filteredData);
      }
    });
  }, [props.searchName]);

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  const handleUniChange = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "university") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return item.university === value;
      });
      setData(filteredData);
    }
  };


  const handleLocChange = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "university") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return item.name === value;
      });
      setData(filteredData);
    }
  };

  const handleCourseChange = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "university") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return item.name === value;
      });
      setData(filteredData);
    }
  };

  return (
    <div className="search">
      <input
        className="searchpage-searchbar"
        type="search"
        placeholder={" Type to search..."}
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="all-input">
        <select name="university" id="university" className="input-university filter" onChange={e => handleUniChange(e.target.value)}>
          <option defaultValue="university">university</option>
          <option value="true red">DAIICT</option>
          <option value="cerulean">NIRMA</option>
        </select>
        <select name="location" id="location" className="input-location filter" onChange={e => handleLocChange(e.target.value)}>
          <option defaultValue="location">location</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Maharastra">Maharastraaaaaaaa</option>
        </select>
        <select name="course" id="course" className="input-course filter" onChange={e => handleCourseChange(e.target.value)}>
          <option defaultValue="course">course</option>
          <option value="software">software</option>
          <option value="maths">maths</option>
        </select>
      </div>
      <div className="box-container">
        {data.map((d, i) => {
          return (
            <div>
              {console.log(d.id)}
              <ProfileCard key={i} id={d.id} name={d.name} prof={d.name} about={d.about} exp={d.experience} address={d.university} mobile={d.email} email={d.email} />
            </div>
          );
        })}
        <div className="clearboth" />
        {data.length === 0 && <img src="https://i.ibb.co/fp04h1b/no-record-found.jpg" alt="no-record-found" border="0"></img>}
      </div>
    </div>
  );
}

export default Searchpage;

