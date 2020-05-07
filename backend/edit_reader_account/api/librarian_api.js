var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}


router.post('/search_right',function(req, res, next) {
  var sql = $sql.librarian_api.search_right;
  var param = {
    account : req.body.account,
    password : req.body.password
  }
  console.log(param);
  conn.query(sql, [param.account,param.password], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "账号密码不对"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})

router.post('/change_password',function(req, res, next) {
  var sql = $sql.librarian_api.change_password;
  var param = {
    account : req.body.account
  }
  console.log(param);
  conn.query(sql, [param.account], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "账号密码不对"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})


router.post('/register_account',function(req, res, next) {
  var sql = $sql.librarian_api.register_account;
  var param = {
    account : req.body.account,
    password : req.body.password,
    email : req.body.email,
    status : "Normal"
  }
  console.log(param);
  conn.query(sql, [param.account,param.password,param.email,param.status], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "账号密码不对"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})

router.post('/search_all', (req, res) => {
  var sql = $sql.librarian_api.search_all;
  var param = req.body;
  console.log("sql", sql);
  console.log(param);
  conn.query(sql, function (err, doc) {
    if (err) {
      console.log(err);
    }
    if (doc) {
      jsonWrite(res, doc);
    }
  })
})


router.post('/delete_reader_account',function(req, res, next) {
  var sql = $sql.librarian_api.delete_reader_account;
  var param = {
    account : req.body.account
  }
  console.log(param);
  conn.query(sql, [param.account], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "未成功删除"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})

router.post('/search_from_id', (req, res) => {
  var sql = $sql.librarian_api.search_from_id;
  var param = {
    account : req.body.account,
    email : req.body.email
  }
  console.log(param);
  conn.query(sql, [param.account,param.email], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "账号密码不对"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})


router.post('/show_book_record', (req, res) => {
  var sql = $sql.librarian_api.show_book_record;
  var param = req.body;
  console.log("sql", sql);
  console.log(param);
  conn.query(sql, function (err, doc) {
    if (err) {
      console.log(err);
    }
    if (doc) {
      jsonWrite(res, doc);
    }
  })
})


router.post('/search_for_loan_and_return', (req, res) => {
  var sql = $sql.librarian_api.search_for_loan_and_return;
  var param = {
    operator : req.body.operator,
    account : req.body.account,
    book_id : req.body.book_id,
    book_title : req.body.book_title
  }
  console.log(param);
  conn.query(sql, [param.operator,param.account,param.book_id,param.book_title], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "账号密码不对"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})

router.post('/search_for_penalty_records', (req, res) => {
  var sql = $sql.librarian_api.search_for_penalty_records;
  var param = {
    operator : req.body.operator,
    account : req.body.account,
    book_id : req.body.book_id,
    book_title : req.body.book_title
  }
  console.log(param);
  conn.query(sql, [param.operator,param.account,param.book_id,param.book_title], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "账号密码不对"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})


router.post('/show_book', (req, res) => {
  var sql = $sql.librarian_api.show_book;
  var param = req.body;
  console.log("sql", sql);
  console.log(param);
  conn.query(sql, function (err, doc) {
    if (err) {
      console.log(err);
    }
    if (doc) {
      jsonWrite(res, doc);
    }
  })
})

router.post('/search_for_books', (req, res) => {
  var sql = $sql.librarian_api.search_for_books;
  var param = {
    book_title : req.body.book_title,
    Author : req.body.Author,
    publisher : req.body.publisher,
    ISBN : req.body.ISBN,
  }
  console.log(param);
  conn.query(sql, [param.book_title,param.Author,param.publisher,param.ISBN], function(err, doc) {
    console.log(doc);
    if (err) {
      res.json({
        code: "1",
        msg : "账号密码不对"
      });
    }
      if(doc)
      {
        jsonWrite(res, doc);
      }
    })
})

module.exports = router
