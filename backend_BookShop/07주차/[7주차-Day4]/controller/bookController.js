const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const allBooks = (req, res) => {
  let { category_id } = req.query;

  if (category_id) {
    let sql = "SELECT * FROM books WHERE category_id = ?";
    conn.query(sql, category_id, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      if (results.length) {
        return res.status(StatusCodes.OK).json(results);
      } else {
        return res.status(StatusCodes.NOT_FOUND).end();
      }
    });
  } else {
    let sql = "SELECT * FROM books";
    conn.query(sql, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  }
};

const BookDetail = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let sql = "SELECT * FROM books WHERE id = ?";
  conn.query(sql, id, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results[0]) {
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
  });
};

module.exports = {
  allBooks,
  BookDetail,
};