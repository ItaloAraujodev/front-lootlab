import queryString from "query-string";

interface IAddQuery {
  key: string;
  value: string | boolean | number;
}

export default class URLQuery {
  public static addQuery(queries: IAddQuery[], path: boolean = true) {
    const query = queryString.parse(location.search);

    queries.forEach((item) => {
      const stringValue = String(item.value);
      query[item.key] = stringValue;
    });

    if (path) {
      return location.pathname + "?" + queryString.stringify(query);
    }
    return "/?" + queryString.stringify(query);
  }

  public removeQuery(key: string[], path: boolean = true) {
    const query = queryString.parse(location.search);

    key.forEach((item) => {
      delete query[item];
    });

    if (path) {
      return location.pathname + "?" + queryString.stringify(query);
    }
    return "/?" + queryString.stringify(query);
  }
}
