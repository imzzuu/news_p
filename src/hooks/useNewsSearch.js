import { useEffect, useState } from "react";
import axios from "axios";

export default function useNewsSearch(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    setNewsList([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;

    axios({
      method: "GET",
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
      params: {
        "api-key": process.env.REACT_APP_NYT_API_KEY,
        q: query,
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        const data = res.data;
        const moreList = data.response.docs.map((item) => ({
          id: item._id,
          title: item.headline.main,
          date: item.pub_date,
          url: item.web_url,
        }));

        setNewsList((prevNewsList) => {
          return [...prevNewsList, ...moreList];
        });
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, newsList };
}
