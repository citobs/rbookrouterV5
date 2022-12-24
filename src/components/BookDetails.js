import React, { useEffect, useState } from "react";
import {
  Route,
  useParams,
  Switch,
  Link,
  Outlet,
  useRouteMatch,
} from "react-router-dom";
import db from "../firebase";
import BookAuthors from "./book-details/BookAuthrs";
import BookGeneral from "./book-details/BookGenral";
import BookMenu from "./book-details/BookMenu";
import BookPhotos from "./book-details/BookPhotos";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  const match = useRouteMatch();

  //페이지고정후 이동하게 해주는 장치
  //  라우터 v5 (useroutematch없어짐)
  //  const match = useRouteMatch();
  //  console.log(match); // { path: '/', url: '/', isExact: true, params: {} }
  //  <Link to={match.url} />; // 현재 url 로 이동
  //  <Link to={`${match.url}/about`}>; // 현재 url에 /about을 붙인곳으로 이동

  //  <Route path={match.patch} exact />
  //  <Route path={`${match.patch}/about`} />

  // 라우터 v6변경
  // <Link to="" />; // 이렇게 입력시 현재 페이지로 이동
  // <Link to="about">; // 이렇게 입력시 현재 url에 /about을 붙인 곳으로 이동 *단 about앞에 /about을 붙이게되면 진짜 /about으로 이동되니 현재 기준으로 하려면 앞에 슬래쉬를 빼줘야함

  // <Route path="" exact />
  // <Route path="about" />

  useEffect(() => {
    try {
      db.collection("books")
        .doc(id)
        .onSnapshot((snapshot) => {
          setBook(snapshot.data());
        });
    } catch (e) {
      console.error(e);
    }
  }, []);

  console.log(book);

  return (
    <div className='bookDetails'>
      <BookMenu url={match.url} />

      {book ? (
        <Switch>
          <Route path={`${match.path}`} exact>
            <BookGeneral book={book} id={id} />
          </Route>
          <Route path={`${match.path}/authors`}>
            <BookAuthors book={book} />
            id={id}/>
          </Route>
          <Route path={`${match.path}/photos`}>
            <BookPhotos book={book} />
          </Route>
        </Switch>
      ) : (
        "저장된 내역이 존재하지 않습니다 "
      )}
    </div>
  );
}

export default BookDetails;
