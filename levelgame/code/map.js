//">"横着移动得火焰
/***************************************************************************
 *        图例
 *    x         云梯
 *    r         暗河
 *    @         玩家
 *    e         怪物
 *    !         不会移动的火焰         
 *    =         横向来回移动的火焰
 *    |         垂直来回移动的火焰
 *    v         不断下落的火焰
 *    b         射出的子弹（不能在地图中出现，由玩家执行shoot命令后自动生成）
 *    #         目标
 *    =         灵光球
 ****************************************************************************/

var GAME_LEVELS = [
  [
    "                                                         ",
    "  x                                                    x  ",
    "  x                                                    x  ",
    "  x       xx                 xx                        x  ",
    "  x      x  x               x  x                       x  ",
    "  x      x   x             x   x                       x  ",
    "  x      x    xxxxxxxxxxxxx    x                       x  ",
    "  x      x                     x                   d   x  ",
    "  x      x                     x                  ddd  x  ",
    "  x     x xxxxxx       xxxxx    x                d   d x  ",
    "  x     xx     xx     x    xx   x               d     dx  ",
    "  x     xx    xxx     x   xxx   x                      x  ",
    "  x     x xxxxxx       xxxxx    x                      x  ",
    "  x     x                       x                      x  ",
    "  x     x                       x                d # d x  ",
    "  x      x        xxx           x               xxxxxxxx  ",
    "  x      x        xxx          x               xxxxxxxxx  ",
    "  x       xx       x    x    xx               xxxxxxxxxx  ",
    "  x         x      x   x    x                xxxxxxxxxxx  ",
    "  x         x   xxxxxxx    x                xxxxxxxxxxxx  ",
    "  x          x            xx               xxxxxxxxxxxxx  ",
    "  x           xxxxxxxxxxxx      xxxx      xxxxxxxxxxxxxx  ",
    "  x                                      xxxxxxxxxxxxxxx  ",
    "  x                                     xxxxxxxxxxxxxxxx  ",
    "  x                                    xxxxxxxxxxxxxxxxx  ",
    "  x @                                 xxxxxxxxxxxxxxxxxx  ",
    "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
    "                      ",
  ],
  ["                                                                 ",
    "                                                                ",
    "                                                                ",
    "                                                                ",
    "                                                                ",
    "                                                                ",
    "                                                  xxx           ",
    "       x                                         xx!xx          ",
    "        x                                        x!!!x          ",
    "  xxxxxxxx                                       xx!xx          ",
    "  x     x                                         xvx           ",
    "  x    x                                                    xx  ",
    "  x                               o                          x  ",
    "  x                                                          x  ",
    "  x              o                                         # x  ",
    "  x                                                          x  ",
    "  x @    x       x        x                     xxxxx        x  ",
    "  xxxxxxxxrrrrrrrrrrrrrrrrxxxxx       xxxxxxxxxxx   xxxxxxxxxx  ",
    "         xrrrrrrrrrrrrrrrrx   x       x                         ",
    "          xxxxrrrrrrrrrrxx    xrrrrrrrx                         ",
    "              xrrrrrrxxx      xrrrrrrrx                         ",
    "               xxxxxx         xxxxxxxxx                         ",
    "                                                                                ",
    "                                                                                "],

  ["                                                                                                                         ",
    "                                                                                                                         ",
    "                                                                                                                         ",
    "                                                                                                                         ",
    "                                                                                                                         ",
    "                                                                                                      x          o       ",
    "                                             xe       x=         x                                    v        # x       ",
    "  oo                                        xxxxxxxxxxx          xxxx                                          rrxo      ",
    "oooooo                                     xx              xx       xx       xe    x                    o     rrxxx      ",
    "  oo                                      xx        rr               xxx     xxxxxxx    xx              x    rrxxx       ",
    "                               xxxxxxxxxxxx          rr   |rrr                          xx=                =rrxxxx       ",
    "                                                  rrr  rrrr   r                         xx                 rrxxxxx      o",
    "e           exe          ex                    rrrrrrr   rr    r                        xx        o       rrxxxxxx      x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxx                    rr   rrrr rr                             xx        x      rrxxxxxxx       ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           v      rrrrrr rrr                        xx             rrrrxxxxxxx       ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           rrrrrrrrrr  r                         xxrrrrrrrrrrrrrrrxxxxxxxxxo      ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       rrr  rrrrrr                            xxxxxxxxxxxxxxrrxxxxxxxxxxx      ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     r    rrrrr                                          rr                 ",
    "                       v                          v     rrr                                           rr           o     ",
    "                                                        rrr                                           rr           x     ",
    "       x         o                             x     x  rrr                                        rrrrrrrrrrrrrrrrx     ",
    "    o   x                                      x     x  rrr                                        rxxxxxxxxxxxxxxxx    o",
    " xxxxxxxxx=          =     x    =             =x     x  rrr                                        v        o           x",
    "        x                                      x     x  rrr                                        v       ooo           ",
    "       x                                       xx    x  rrr                                              ooooooo         ",
    "             x                                 x     x  rrr                                            xxxxxxxxxxxxx     ",
    "                       x            xxx        x     x  rrr                                                              ",
    "                       x        x   x=         x     x  rrr                                                              ",
    "                       x        x o x          x    xx  rrr                                  xxxx                        ",
    "     @             x   x        x   x     o    x     x  rrr                                 xx                           ",
    "    xxx      x         x        x   x     x    x     x  rrr                             o    x                           ",
    "    x x      xrrrrrrrrrx       xx o xx         x     x  rrr                o     x x    o    x                           ",
    "rrrrx xrrrrrrxrrrrrrrrrxrrrrrrxx     xxrrrrrrrxxx    xrrrrrrrrrr     xe          x x    o    x                           ",
    "rrrrx xrrrrrrxrrrrrrrrrxrrrrrxx       xxxxxxxxxx     xrrrrrrrxxr      xxxxxxxxxxxx xx  o o  xx                           ",
    "rrrrx xrrrrrrxrrrrrrrrrxrrrrrx    o                 xxrrrrrrxx r                    xxoooooxx                            ",
    "rrrrx xrrrrrrxrrrrrrrrrxrrrrrx                     xxrrrrrrxx  r                     xxxxxxx                             ",
    "rrrrx xrrrrrrxrrrrrrrrrxrrrrrxx     xxxxxxxxxxxxxxxxrrrrrrxx   r                                                         ",],
  ["                                                                                        ooo                 x ",
    "                                                                                      ooooooo             x x ",
    "                                                                                        ooo                xx ",
    "                                                                                                            x ",
    "                                                                              xe         e         ex         ",
    "                                                                           xxxxxxxxxxxxxxxxxxxxxxxxxxxx       ",
    "                                                                         xxrrrrrrrrrrrrrrrrrrrrrrrrrrrrx      ",
    "xxxxxxxxxxxxxxxxxxxxxxxx                                               xxrrrrxrrrrrrxrrrrrrxrrrrrrxrrrrrx     ",
    "                                                                     xxrrrrrxxxrrrrxxxrrrrxxxrrrrxxxrrrx      ",
    "                                                                   xx  xxrrrrxrrrrrrxrrrrrrxrrrrrrxrrrx       ",
    "oooo                                                             xx      xxrrrrrrrrrrrrrrrrrrrrrrrrrxx        ",
    "oooo                                                                       xxxrxxxrrrrrrrrrrrrrrrrrx          ",
    "oooo                                                                          v   xxxrxxxrrrrrrrrrrx          ",
    "oooo       x                   xxxxx                                                 v   xxrrrrrrxx           ",
    "           x                     xxxx                       x          =x                  xrxrxx             ",
    "e         ex                       xxx                                                      x v               ",
    "xxxxxxxxxxxx||xxxxxxxxxx            =xx                                                                       ",
    "rrrrrrrrrrrrrrrrrrrrrrrrxx             x                           x         =x                               ",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrxx            x                                                                     ",
    "rrrrrrrrrrrrrrxxxxrrrrrrrrrrxx          =x                                                                    ",
    "xxxxxxxxxxxrrrrx xxrrrrxxrrrrrxx          x                               x       x  x        x               ",
    "          xrrrx   xxxrxxxxrrrrrrxx         x                                                                  ",
    "           xrrx      v   xxxxxxrrrxx       xx                                                                 ",
    "       x    xrrx          x    xxrrrx      xxxxxxxxx                                                          ",
    "      xrx    xrx                 xxx       xx      xx                                     x=  xr              ",
    "xxxxxxxxrx    v                            xx       xx                                                        ",
    "rrrrrrrrrrx                               oxx        xx                                                       ",
    "rrrxxxxxxvx                oo             xxx         xx                                                      ",
    "rrr                      xxxxxx=          =xx          xxxxxxx=               x=              x             # ",
    "rrr              o       xxxxxx                         x                                            rrrrrrrrr",
    "rrr              x       x                  rrrrrrrrrrrrx                                            rxrrrrrrr",
    "rrr       o      x       x  o        x      rxrrrrrrrrrrx              x               x             r xrrrrrr",
    "rrr  @    o      xrrrrrrrx ooo              r xrrrrrrrrrx                                            r  xxxxxx",
    "rrrxxxxxxxx      xrrrrrrrxooooo             r  xrrrrrrrrxxxrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrxxxxx",
    "rrrxxxxxxxxrrrrrrxrrrrrrrxxxxxxx            rx  xxxxrrrrxxxxrrrrrrrrrrrrrrrrrrxxxxrrrrrrrrrrrrrrrrrrrrrxxxxxxx",
    "rrrxxxxxxxxrrrrrrxrrrrrrrxxxxxxxxrrrrrrrrrrrrrx     xrrrxxxxxrrrrrrrrrrrrrrrrxxxxxxrrrrrrrrrrrrrrrrrrxxxxxxxxx",
    "rrrxxxxxxxxrrrrrrxrrrrrrrxxxxxxxxxrrrrrrrrrrrx      xrrrxxxrrrrrrrrrrrrrrrrrxxxxxxxxrrrrrrrrrrrrrrrrxxxxxxxxxx"]
];
if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;

GAME_LEVELS.forEach(function (level) {
  level.forEach(function (row) {
    row.split("").forEach(function (ele) {
      if (ele == "o") gameData.tot_allCoinNums++;
      if (ele == "e") gameData.tot_allEnemyNums++;
    });
  });
});