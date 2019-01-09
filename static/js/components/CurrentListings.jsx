import React from "react";
import ListingsCard from "./ListingsCard"
// import Style from "../style.css"

export default class CurrentListings extends React.Component{
  render (){
    return <div className="listings">
              <h3> Current Listings </h3>
              <ListingsCard
                listing={{imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7WxfwOSq6dfa6f9k617Z6UgC_UjDiBGOjBQjvEfas9gUUIch", area:"Towson,MD,USA",
              phone:"(443) 515-7044",email:"warenoir@gmail.com"}}
              />
              <ListingsCard
                listing={{imgUrl:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUTEhIWFRUVFRUVGBgXFRYVFRYXGBUWGBYXFRgYHSggGB0lGxUXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGjAlICUvLS0vLS4tMC0tLS0wLS0tLS0tLS0tLS8tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAEDBQYCB//EAEUQAAEDAgMFBQQHBgQFBQAAAAEAAhEDIQQSMQUTIkFRBmFxgZEyobHBFCMzQlLR8ENicoLS4RaSo/EkVHOisgcVU5PD/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAgEDAgQFBQEAAAAAAAABAhEDIRIEMUETURQiofAFMmGBkXGxwdHhFf/aAAwDAQACEQMRAD8A8wwOMqMEEEgRYgiPPkrbD4pr9DfodUZjMA4jgblNhxB0nlN1RY3BGmMxsRzbJBPW3xXlvhkfsz0FNw0aHB491PS46H5dFYAsqiWGDzCyeCxpJyv8j39Cj2kiCDBURlkwT5RdMucIZY1JFpUpwoXNXdDaIdap/m/NSvp+Y68l7/SfiUMvyz1L6P8Ap/o8fqOhlj3HaAXNUL2I5zFE5i9GzhoAexQuYj3MUTqaQwFzFwWIxzFwWKR2CFi5LEWWLksSodguRNlRORNkSoLB8ibIicibIih2D5UsqIyJZEUFg+VLKp8iWRFBZDlSyqfIlkToLIcqfKpsiQYigsiyp8qlDU+VOhWRZV0GqXKnDU6CyINT5VMGp8qKCwfIlkRGRLIigsH3adEZEkuI7NhiA4MvDGxZsOk21JBme73LCbcqEkmYFyI/3K1FXEveZzHXrPT8ggcdgWVRxCCeYsf7+a+PwZIwlckfQ5cDkvlZV4TBMe3M4SQ50GSOnQ9yG2s59N7XNJy3Bva8RMq6weE3bS2Z4idI1Vd2nZ9R/M35rTHO8qXdFTjWO/JHRxoNncJ9x/JWOGxbmaXHQ6LJYJ7+FpEtJjwvyV9gWPEgt4bEGRzHSZWmfCokYsvM0FGs144fMHUeCcsVE2tfoQrHDYwkgHU2B69AQurp+tyYWoZNr6/9OTP0kMlyhp/f8E7qahcxHmmeYUTqa95O0eS1RXuYoyxHOpqJ1NAgQtXJYiixcliBgxamyIjImyJAD5EsiIyJsiAB8iWREZE2RAA+RPkU+RLIgCDIllU+RLIgZBlT5VNkT5ExEOVPlU2ROGIAhDU4apsifImBFlT5VMGJ8iYqIMqfKpsifImBBlTqfIkgRntrYl7MVULHEHMNDH3Wo/DbdIYM7cxyzOhNu5BbdwNXfPfu3FpIggSNAOWmiGH2Y/h+S+dx4seXGr3pHszyZMc3Wts12HqZxMRcjWdFxisI2o3K8SPGL9ZCfY5+rP8AE74ptr4g06eZusgXEjmvKSfOonptrhbKetsQsjdnMAQYNnaz4H3I+m2GC18o+CVDaQLA5zYkxa95jyUlV4y5psRPfELfLLI6UzLFHGrcDOUapzuBMglxjoSeXRXlCBkPQtPoQqk4H7zTmtqPiRqFZUR9Se4O+a6M8k4xcfBjhg1KSkaEYph1tOh5HwOnqu30li6GPcwhuoIEg96u8JtiLH2ehOngeXmu/D18lrKv3X+UcWXok1eN/sWT6ahdTVmKciYieuqidRXpqR57RXGmuDTVgaK5NFOxUV5ppt2jjRTblFhQFu027Ru6TbpFhQHu02RGbpLdIsdAe7S3aN3KW5RYUBbtLdo3cpblFioC3afdozdJblOx0B7tdbtF7pPukWFAm7Timi90nFJFhQKKafdosUk+7TsVAe7T7tGbpPu0WFAe7SXTsfQBg1Wf5gmS9WPuPg/YKCFxeBp1AczASeeh9RdUe0MQ5tZ+VxHF1I5Dloim7SeKQcXAuy8418oXyMemmkpRZ9FLqYW4yQfszZVfLlp7g3Jg1nZr9xphF4vstjarMuSlqDarOn8qCwdUvZJ1k+5GN2tUpj27dHGR5TceRUqdSutmnBONXoH/AMF4zIG5GWMzvB+Keimf2YxeXKaTYiPtB08FY0O0YPtsPi0kj0JHxKIxO0Kb2gNdq5oNjYTckOPyVTyuXcUcUY/lMp/hPEs1yDp9YAR5kqRmzawEODHi85Xg2/lVrtbCUIflDZ4cpA1zTMX5EKM7Kobxzc4DWhpDuLinX71ohDycu5DUl+VmXxWyocC05SIs7TXQOHwKhGHc15MxBJiJ6Hr3rUs2fSbP/EsMnQtfHxKBxGAZmhjwZn8WXyLgIPjbvWqzd0zOMXrxsD2Zt0ssLD8JnL5c2+VlrMLiWVRLDfmOY/XVZFmDZvm52jdzDwCQYnuPwKk2TtB9AVXU6IezPGYucC3WGnhPLvXf02ZxXfX9jl6jDF7rZrzRXBoqh/xDiTphx/qH5BR43H417YFI05ghzWPmPOxC6n1mJeTlXTTfgvzSTblY/dbQcYz1r9AR+XVWeEwW02N0c4OJINQBxtYwXO0U/HY/cfwsy8NFc7lV7dnbUdyA/wDpHxJTN2NtM5uM8MT9h96Y0b3FHx+Ifwsyx3K6FFVrdgbRP7X/AL6Y+DV3U7L4+BOIFxP25HPnlFkn+IYx/CTLAUUtwslj8PWouh+Ic7+Gs91+mtijGdqnCxY0kWm9+9VDrYSFLpZI0P0dL6OqMdqHGwptk21KsqGMc8FtR7KJAmwe8+EgEDxv5qpdZjXkS6afsLFV2sOWC550Y27j8gO8qKlWqu9nCVT4Gl/WuG7LbmluLptnXK7Etce8ndy7zQuL2fasRiHP3Qpmd5UIdmNw2QDI71xS/EJt/LVHRHo1Wy1FDFa/Qa/+n/WlucT/AMjX/wBP+tdU8PuWVXMr1AaW7P21WHZoJywByPOFaYrbzKTQX4kyQDAe8uNvwxm9yz/9HK+xsuix+Sp3OJ/5Gv8A6f8AWo3urtMHB1h47r+tRY7tjWP2QqAfiqVCAf5GmSPEhZraGOr1/tKjnA/d9hn+Ua+crSPW5n3oiXTYV2s1eHxbXAlw3ZB0c5k+PC4iPyQOM7RUGWBLz+6Lf5jZZengupt0AgfryRNLCCYa2T4ZitZfiDSpGS6RNhFftDXqfZsDB1iT6myDfTq1PtKriOhcXe7RXGH2RWfow+dlbYHslVeRmcGz0ufKFxT6ycvJ0x6aMfBkhgWd/qkvTx/6efu1D/KUlnzl+pXBex55UqUKri4vhzjOoI9CJ6LV0di4J+FLw8lzaJc4Nc0wQyTqbX6hZh2KNQfb1AO+WifFphBhokkVWyD7W8M+HJdUuni1rX72c3qO9/2LvZ9djafE9ou7VwHPvROGpU8QcjatLrJcCO4QJWcp4BptZxJgZXX8hefRQu2fXpvIyPbrZzGyR0LXOGniuZ9LBO3I6PiZSVKJoNq7P3VEgBtnQXCf/kiyjpGAzvj4KsfVrlhZkOXXKXBoMXtDnAX8E9LGl+VrmRlI1gzA01v6KJYdakmXjy1pqi8rgcIEjKaYv+87u8UPVpyx4mwB+DrrmvkhjhTa05qdwI++Zn05KR2Ja5tQEtHAY5SchlYNV2NlIoaGC42lr2uA6G/orVtI20NybETcjlqqHZ9E/SqZItIv5K8pOz1nNPJ3nqunK2vPgyxU/Hk52ew1qrWOdGZ2WY9mXEeei0HZij9XW5w9rfEBVOwzSq1SG0qjXh+UZagIc7MR96A24Knoh7KVZ2HqOpsY5mZrg1xJLsmpB0PetMc4wldfdGeROUe/3ZqzgcplnDf2dWH+Xl5EIwYg1G5ajBJlkhxim2QW7o62k6rPYR+NZxvqMqNJyw5pbBvcZWCPZOqud8crzYFuaR0IDdD0utckcU03VMyxyyRaVlRi8IylUBqVXBptxPdEktAGvOVtNn4SjuwIaf4pOkHXXposHU2iHu4rgTq0a8BmD8Va7M2o51JzgbywCYHtOANiF5kUds5G4pVaAsWUwbfsnm/ih8JVpDE1iGMEspfsjH3hodF5/wBpdog1aZJcId0gDiHSJFjbnZQ0NqOFQNzgWEuytAbGYyLa371tTpGPLbPV6dRpPC1nL9k0cu9ydzraNF+VOl1/iXnrO14p1KbXVq3sy8hwDHTa8CQRE26oHFdt6him2qXA1ZJ5OYTOWXCQAbTrZCTBzRW9s6DQ6q4Ae1PLnUMoCl2SeKbKjn0mtqAES583E3hhvCbtDjs5eC4RIJvJIkxHmZ9F1h9nl/tVHHQjjgRExc2snjbjEcvmZLR7Mh0De05Ji2c/EBVG09kObVextg1xbm5GPO/kr7F7GoNgNBqklwIZUDg3KY4nwW35QTpeFFT2aXNJJcWjRslxjkLalDy8fIvTvuZluz2NNyXn3eTR8yjDRcGHhgMbJBsQDmiy02A2ZUAndBk+vqVXY/DT9KmJpNZckySTEC8H06oWVzexcEuwDVowwy4ksmI0OYAmfBIsj2GRNzAknvKLxeHotpVwGskBmR150BMcvTqryltSk2kwMovL4EuAgGwtfTxUylo0SMz9AqktlhGd2Vs2k5XO8rNPorjAdkqlRwa57QTYAfmYCnx1Ss80HboMBqnIS6ZIp1AZAAixKVc15vWY3ubAPvuoc3oaiFjszSpOLXguIMGXAi3giRXoUhALG9wIn01VQzAOeeNz3yQIh5BkgDlGpA81aYbZbWyDTLSOrYWcm2aRijl+3qY0zO8Gn4mFBT7XMafYqSD+7M/5kXVwgHJU4wANU21cfenCroc40rLh3b2bnfeo/qSQw2MPw+5Muv0X7nD8UvYz2JoRUOUCDlNovLWklKrSIYCAJIvEE6CZA8VXYzASQc33KY0mIptHyQrdjG/1jZ8Nfen6a8y+gNy9vqejdkMa2nRaXEB8uuYDhxGPC0J+1m0Q9shzSTUFzBtkH9l5/scfR8RmN5YQOWsA69Leqvsdiy+mMsg5zpcxlaD8ljkxtP3RUd7I8bgnnDb0OYZMZR7XtZbX6qqoYNzXNzGcx98FWmGrVHNFJziG5hIIt7WadNJRu2MPu6zKWdry0zLHZm+wdCEJuOipJO5Mrcay1Lxb/wCbkPWzi4m2t7wW8lYbRp2pHvH/AJEqNoMVB1AF5j2eaSeieSbor8A6hvWBr35uQIsfMBaHZ2zBUqPdTLQWgvdLoJDTcAdVQ0MGW1GvyMkcwb+StMCyoazxTqsBh9ydRlzQIBvaPGE5pN6Zam4raB9nsfRdVfTewuDi5uVzXZXZnHiHI+KCp0iWlz3Q4EuIzQHcTQQA2xPFPkeiLq4I021Giz3gc80vJMmwtJOl0K/AvZTY1zSCHRoerQOSuLtvfn/BE5pRTZN/7d9U9xquJa5gDd+4F2cGcrYvEibiEEzDudUawGpxGJ3zusHlfklRZkDTmkOzOsDLL5eK2pDQbTqEds2qwVmugQ17HAnQcVOdbg3PqrcpLyCSfgtML2BfUj6wtkE+1OmW2n73uVdjuxzqbspcT/N/Za6j2lp7ynld7TakWIm7f6So9obZYeJ8tlxaJFyQSJEcjE+i53lyryb+njZlNm9lWVKrqRLgQ2Q4FhEgtm2psen5KPH9mG0XZcj6lgYYGk6m5BGlh6rRYXaDQ8ubxEFzCRMiXzeRoAIlTjaOeq7d1C0tDOJoBLTmcQRmBBty0vdP1p33J9ONaRR4Xss0Q59F4be5NPkLHr7uSkqdnKABMS1oDi6LAGIJ4bagLRb8vcM1UNuW5nWAsbuIFgI+aD7Q417w2lVqtLd21hAENIDmk6Afh+CXqN+RNV4K/ZvZ2i6plyWgEacyf3eiHrbJptdVi27e1sDKYBmbkDmCFa7L2sxr4JEcIDo0ibEjlohMZhc7MW8OYM7oDcwzu9p0gc4D7+acHJ9xzcVVGqGBo0mFz7BovmE62H3o1IUTHkNquGUNDmmzLwadOOdtdFnttjM6sSS3PRpMEsdyNF0dfZaTppKvKFAvpvbna2KbH8TsuYChTFp9om0JONLQ1PeznEVCWDjcZBcAHBo0BMAX0IWVxWGH/Gzq0MiTJnMZudVpquDLjS+spzFRxdnaGguyDiOjZkEdxCodo03ZsTmBE5DcRaTCUdMlzv7/AEB8c2KVcRqKegECw81bVarWsYJvDRrEcDDf1KcbLdWoYh7S0NYym4y4AngEQOd09Kgx9GnmZxubByvLRMs3ZMyBaZ/sirQ4yt6H2sB9V/1f/wAqoRmzqdFoZwAPBdJkgQQYtppIVdtMzk7qgPq1w+aeieMZc0tDjcENPtZQ05dTJmSoi9I0m6YZgdsBrXAU3SwsqZnEEOLKjXR15K4r7UFdtOoWhhcHS3Nm0eRrA6dOaymGwTgyoM0lwc4TrxPa0D1v4FFYCm5rWMddwD9JOr587KpeyJxvdsta5CHo4J1nyIL4ib69PJQnEGTLXgDmWOg+Fp9y5oYumx4c4uABBMtfEA66KYL5laNcjTi0maBlCySR2vQES/kD7LtCJHLoU69PlH3PH9Kfszy2rUklwcL6zm1AiRA6ALluLgAXMdP7oahteoXNBpUWtzNzcDjaRN3k8lXYcVJEmdOd/gp4e50+p7F3vpngN7ezp1Ous3U9HEeyxuYuBPKOQER4NQzX1S8uNWpBcbFzgIJ5BHjAurPGZ0wHQAYs+GumNTGixk49maxt9iRtN0yQTyjMC7019yttigVd26ASK9NgJAPCKdUweov7lBX7OuogQXXjSA0aE35rlmLbQblaQSyo2oTygNcLjXmVjyVlSi+LT9mdbYxLXOeQ0BjKtNg7wGuPhrfzCg2jh4rBgdAsCRBOpE3OsQVU8TnTMgmZ63vbrJUz6pzEuMnqfBPsjznjm8l3rYXi9msBgVAdLgGJIEavnmgqWzgXCHEG8GOn8y5fib/ru/X6u2GxPHAi+ae6BJ+CtXR0Qg4pJuyzwGE3bC9zuGk9heHAjhc4OB1vJGXzHJBv226o97i5sPfmDRDgAHZmie4tA10lHbApUnPOauCHtdTIa15jMIEnLAh0HyRuN2ZRpFzYLiLSZBmelo804pt0yOqy44w2tf0KCvWblERAEcld7E2fSqMgMqF5DXyHgAHhBN22teAeSFp4dhMmnPOJJPpK02F2jWbSyU6bQ23stPP95pvrqqeKkRi6hTWlRV1OzbyQWvcBxTJP5oXFbJqA/aE3I/vqtDRqOIE2PS/zXNXCF3P3SVyvlejqtUZ/DbIruLi0yBzMH59yIwWzKxdlhhPCCTUc23gCdFsti7Ny03j8Xj7rIShsIipMmPEX8QrcBKTS0VOF2HiKrhT3TA1zyHOFaIBzCTLXEC86clXba2PWY7NVaYjKHNex5Em8zTbfh/7lv9k4DJUBkkToTI9Esdgyc3fPO3gQqSQ221tnkzMaynzj+3ULultFhaW6EGedxM8hrc3nlpzWpxPZOp+zFMXNy4/CLIOp2XxLAXODSBc5Xg2jvKfFHLJpyVxYPtaq6s0V7sDgJAuGjKBaTbM5jzYDl3qtbTLjmc6SdTA6d2trK02hUa0/VkvaxrWk7t9iLGYBjiJ9VVYetp+uWsqNvudj32LDA1alNp3dUsmHQGNObleZ6rh+Z7K73OlwDcxj2r8+Q16LllYATbQctFT0sVmFR3LXpaRCaOXNim+0vKZrsdhgKFSD7LWGYv8AZVB5ckLjhRa5jXOh2Sk+AGgA7tokyLaSqU7Zdlcwn28gtAhrJAkAX9rXVaDYu2A8CnUawuaA0OLWmWhoAzFwmbJSjZfTRlGCTe/+s5qU3Fkw0glgkOn77dLa/mVxSwha8ukXmRJnR0Dp95X5qMAHC0cxDY08EJV2iwmC4+UGbcp1UKPhHb37gJIzHLnjK0CQbkVGuIsOgKmwQz4hueWshznEgwGtBe4zys0qelTD9KkeOX5QU9bZlSDFYwRFgbjpYOQlvYV7GdqYSpULnCuGve4lrJgDMSQ3rzjRQ4bC1Gtq0qjw+rTLnGDnHActRokcQieSv/oeIbcVoIuJAkd92tKDNbEU4IAqtuOGm0kiIIs6TI5hWpe4mq2Kl2SxFVoeajRPIucCItENEDTkkmp7RxQAAoGIESx4PnZJHN+xPNfaKulgqI+6PMT7yuqlNg0DndwygIUUXnkB4mT7lPWwzSYDna6DUiBFr85V8He2D6rEl8qKvaNIyMsM7nPbfwi/qiMCXNIOYSDNiCO7WyNGxeZYB3vMe4yfcpDs2k0ibno1oE+4k+StpVV/Q5fiqlaj9SbaG1KlVgbwWm4HEZEQ48xGirjhMzTMSdSrR+ADf2bGj96Z9Nfgi27PYaYc1uYkxAb+eijjFeRPrJyb+T6mcGCLAYdPQaBC1KLoubrSmg3m1oPSxPuXRwlL8DD5BWo/qc765X+X6mUo4N7rAk+EyVcbO7OkHM8we/iPpp6q7BZTbwhrR3AD4IGvtHkFokY5Otk9LRbbOoUKUWDncievcNAudpbRbmIyDxVNhqxJJJTV3ySUvJG3C2aPZVNtQi0X/wB1e4uhkZ7IdHcD32nyWZ7PYkNcJiDa/iNIutltHdbkmxtr7IuOREJtHdh3Axf0tpfrlv190HRW9DNAyn4H3x3rIvqHeWjXqIHdK2FHH092ACC4CdBaP3jb1WXHZalZfYTNkvf9dYQ1PFHeOaRAAmXBzR33iF3s7H5hGWAQCJ8OVjPuROHp3c4kXjlliJ10QzRD4eqc0T398dbFc4hxv+h+acF2azg0fwB3pN1Hjm1MpirlAvZsfryUjMVtjtFVbULQQI6T6aoWltyq9pzO+8BziD5oTbtTPULnEl1xM2sbQIEIOhEG3MK60cM5PnVlzjMHml7DB7iQb94VAcJBtf3FXG+IaCNeEen+yqm1+I+J+KqC5LZnlyzwtODGySIJPgSQo/oLQIBEHvK0OAqtyXjXmpmvYQ42sJ5KOCT8m3x8mtpGTr4FsyHR4RHwT4VzqTg5tQSNCQD7jY+i1deiwMLugB5c1NX2cxtAPcCC42tbS3KPLVGuxcOonLaivqZjGbXq1HFzqoBMTkY1gMdzQB7lW4pznuzGoSf4T8lp6lFsDLBPQ29LKGrhTaxbNhYGSelr+RRFxXYv4nJLukR4HtDuwBlaALcLHD5lGf40pNMEkfykx4rihs5rjxcXWIY75KWrsHDnm9p77/ISofpp7s3jnyNaSLDB9pabzw1aZnkXZT6OhXNGpmvlb42WHr9l4nIWukR+F3yVZU2fWpEljqlO/wB0kDy0KFCEu0v5L9eS7x/g9RdTBuabSe8JLzIbWxotvz5tBPnLU6v0X7h8TD2ZcvGGZrmqHlmOUHwa3XzlEUxWeIp0hSZ1IFMentH0TDHUqVqNMT1jM4+J1UjKNerdxyN79fTktDxHNs6ZhabQXVahfaIHC2/fqfVO57nAChTDR+L2R5k3KlyUaYvxu6m/uQmL2m52hgdykfI5r4Vrb1HGo78Is3z5n1UmKx31bWN4QPutsAq19UnVcPek1ZSdWQ1CSVG8mdVMuXNKtHM47IHOJ1K4DVOaScU1dgondAQF05q6ZTXYYpXc3vVB+zHinckT3tDrc7EFaDE4tz6buIZDYnibcTYcIBJnQTCzuFruB/VvDp5K+q12mleRDR1gi/IOzEX0lM68UvlMsafHrYa3DTyHzV/hqLmgcTW687dOXNZ1rDmkaT3AK5sWzAuADD3CdDp5aJNBGReYSoWts5sAzzJ0ubhW1BwvxAT1zGfCSOXks1Qw4ADtBF5k+ehOk2CsMC2m+frr5f3W9eqmjVSLSk1ofOcOMkxkBM6atFtYUm03kNieIggHNA1HIiD/AGVPRfLnNa8sc03JcADPMiDMBHPxZpj64yINzJE9+Xl08VNFctGB25SO8MkE3kyb35T08EFRp8uqtdo0w45mnUmwBte1zqhKVNUcMvz2c1WHL4KvNNW7uiFqYdOGicvzAbWnqu2vIDhOoUwpLl1JUzBxC24r6sjqAPRaTC48PwZbmDSAGAl+UXEwSYbpPMnVY8tsjGbQdlyFzg02dH3gNB0i36ssuOzrwZOCr9DklE4HDl7oDwALmdD3SbDzVdmVjsp5BzxIaQTbMIkWcMpF9LwkkXCSbLLatFzXgVTDoBloFgQIDrQbD9SlSqPAsRUHv9D+aW2sVTq5X0xlaBlyS2WkTFhyOsqupui4MLOStmzlUtB76zDYgsPp7j8lLhNn1agJpHOBawP9x6wgvpkiHgOHfdEbLdFQblzmvOjblpIBi2YfHmURjsPUvTOKlLKSHUwCNeAfIp1omNxzhLmyTzbmc094OdJb0LgjN/SqNG1Nonrz9UFX2q53NVjnppV8Tywh+IJUTnLkBdtakWjkKRrFKyipW01LZooshDUxCINNOGKbE4ggapWU1OKakDE+QcSIMXQapA1TMYEWVRDTYZUlSo4CwF9dbxa8G/K3cpqYup20ZRyLiVdAEcv7IgOm5ue+/wASjxSCTcMjkUkwTeDmFy/EETDi2x5nusI6wPRWP0YLtmzQ7nCfIdMpsx1aXZovy8RYknxSjM4B0gWGpMX7z0Vs7Akcp8FycJ3Jch0yvNEaTPff5phQCsBQ7kz6XcpbJcCve0dFFuZ0VkaErncBHIXArH0VwaQVlUpqB1FDkLgBGgoXUVYnDqB9IoiyZRATTR2yMbuagJaCLgy0EgHmJ5qN1NcZVYotxdos9t4pjyCxzna3c5xPhBAA15BVoeuXqOVNGjyW7CQ9WexMK2pUa0g8TmgRAIM94NlSter/ALM4pjKkuMAQZytdEEEOhzTcd0G6VGmNpvZvsDs+pTptY2tma0QCXumJsOExbTyTIUY6j91rwOUkTb/qNzeqdaUdlo8gClaFwwKZoVtnijtap6bFyxqKo0pWcmaQjY9KkiW0VPRogaqVyxcjrUKQE6kkKSIITCEWQ0R7lNu1KlCaZNHIopx0UgapWUkWOiFlAnRTjDFFsaI5LsOQWokDMPClbTd0RdMIiiwTdUkVQJRwZPVG0NndZVvhsgGqlNdqtIKKk4A9VG/Z3Uqzr1oFrqvrVnJ0OgGphi3wQz2I1zydUz6c8lLQUVporn6KEduCEixZtBQEMOFE7DhWO5UL6ClodID3A5KKrQ7vyVg2h0UjaNoIUlKKZmqsdFE9oV/iMBKqcTh4WkZGE8bQA4KJyIe1RuYtUY0QLplSOaZzVC5ME6NNR7QVA1o+mPbAAy5JiBGspLMb0p0Ub+szlinakkqZxBFIKww7UkljM6cSCmlcvdKSSzNmzkJ0kkzMZyTQkkgET02Kam1JJBaJA1SZgEkkFHTa6lZUKSSLKR2Kp6qak49SnSVJjCAT1XBSSV2BFUIUO8I0SSUNgMcQ5RurpJKWwo5GJ6p/pCSSmxErai6D0kkFo5qVCq7GkFJJIU+xT1mIZ4SSW0TjYPUULikktEScFJJJMD//2Q==", area:"Tempe,AZ,USA",
              phone:"(443) 248-1465",email:"warenoir@gmail.com"}}
              />
          </div>

  }
}
