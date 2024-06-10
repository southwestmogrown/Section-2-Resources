// router.get('/', (req, res, next) => {
//   const sql = 'SELECT boardgames.id, boardgames.name, boardgames.max_players, boardgames.category_id FROM boardgames;'
//   const params = [];
//   db.all(sql, params, (err, rows) => {
//       if (err) {
//           next(err)
//       } else {
//           for (let i = 0; i < rows.length, i++) {
//               const sql2 = 'SELECT categories.category FROM categories WHERE id = ?;'
//               const params2 = [rows[i].categoryId]
//               db.get(sql2, params2, (err, row) => {
//                   // add each category to corresponding game object
//               })
//           }
//           res.json({ games: rows })
//       }
//   })
// })

// router.get('/:gameId(\\d+)', (req, res, next) => {
//     const sql = 'SELECT boardgames.name, boardgames.max_players, categories.category,
//                         reviews.content, users.username
//                         FROM boardgames
//                         JOIN categories
//                         ON (boardgames.category_id = categories.id)
//                         JOIN reviews
//                         ON (boardgames.id = reviews.game_id)
//                         JOIN users
//                         ON (reviews.user_id = users.id)
//                         WHERE boardgames.id = ?;'
//     const params = [req.params.gameId];
//     db.all(sql, params, (err, rows) => {
//         if (err) {
//             next(err)
//         } else {
//             res.json(rows)
//         }
//     })
// })

router.post("/search", (req, res, next) => {
  if (req.body.filter.length > 0) {
    const searchTerm = req.body.filter;
    const sql = `SELECT * FROM boardgames WHERE name = '${searchTerm}';`;
    db.exec(sql, (err) => {
      if (err) {
        next(err);
      } else {
        db.all(sql, [], (error, rows) => {
          if (error) {
            next(error);
          } else {
            res.json(rows);
          }
        });
      }
    });
  } else {
    res.json({ msg: "Please provide a valid game name" });
  }
});
// Settlers of Catan; DROP TABLE boardgames;
