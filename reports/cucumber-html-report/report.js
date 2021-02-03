$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createBasket.feature");
formatter.feature({
  "line": 2,
  "name": "create basket",
  "description": "",
  "id": "create-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  shopping basket features"
    }
  ],
  "line": 5,
  "name": "create basket",
  "description": "",
  "id": "create-basket;create-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i add an item to the basket",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i can view the item in my basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 757607727,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iAddAnItemToTheBasket()"
});
formatter.result({
  "duration": 67190,
  "status": "passed"
});
formatter.match({
  "location": "Basket.iCanViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 65790,
  "status": "passed"
});
formatter.uri("deleteBasket.feature");
formatter.feature({
  "line": 2,
  "name": "delete basket",
  "description": "",
  "id": "delete-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  shopping basket features"
    }
  ],
  "line": 5,
  "name": "delete basket",
  "description": "",
  "id": "delete-basket;delete-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "search for the basket",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "delete the basket",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "unable to view the item in my basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 101718,
  "status": "passed"
});
formatter.match({
  "location": "Basket.searchForTheBasket()"
});
formatter.result({
  "duration": 403605,
  "status": "passed"
});
formatter.match({
  "location": "Basket.deleteTheBasket()"
});
formatter.result({
  "duration": 79321,
  "status": "passed"
});
formatter.match({
  "location": "Basket.unableToViewTheItemInMyBasket()"
});
formatter.result({
  "duration": 97985,
  "status": "passed"
});
formatter.uri("linkBasket.feature");
formatter.feature({
  "line": 2,
  "name": "link basket",
  "description": "",
  "id": "link-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  shopping basket features"
    }
  ],
  "line": 5,
  "name": "link basket",
  "description": "",
  "id": "link-basket;link-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "search for the baskets",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "link the baskets",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "able to view linked baskets",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 111516,
  "status": "passed"
});
formatter.match({
  "location": "Basket.searchForTheBaskets()"
});
formatter.result({
  "duration": 77454,
  "status": "passed"
});
formatter.match({
  "location": "Basket.linkTheBaskets()"
});
formatter.result({
  "duration": 78388,
  "status": "passed"
});
formatter.match({
  "location": "Basket.ableToViewLinkedBaskets()"
});
formatter.result({
  "duration": 16630871,
  "status": "passed"
});
formatter.uri("mergeBasket.feature");
formatter.feature({
  "line": 2,
  "name": "merge basket",
  "description": "",
  "id": "merge-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  shopping basket features"
    }
  ],
  "line": 5,
  "name": "merge basket",
  "description": "",
  "id": "merge-basket;merge-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "search for the baskets",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "merge the baskets",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "able to view the merged baskets",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 111517,
  "status": "passed"
});
formatter.match({
  "location": "Basket.searchForTheBaskets()"
});
formatter.result({
  "duration": 61124,
  "status": "passed"
});
formatter.match({
  "location": "Basket.mergeTheBaskets()"
});
formatter.result({
  "duration": 82121,
  "status": "passed"
});
formatter.match({
  "location": "Basket.ableToViewTheMergedBaskets()"
});
formatter.result({
  "duration": 81654,
  "status": "passed"
});
formatter.uri("updateBasket.feature");
formatter.feature({
  "line": 2,
  "name": "update basket",
  "description": "",
  "id": "update-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  shopping basket features"
    }
  ],
  "line": 5,
  "name": "update basket",
  "description": "",
  "id": "update-basket;update-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "search for the basket",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "update the basket",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "able to view the updated basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.thatIAmOnTheShoppingWebsite()"
});
formatter.result({
  "duration": 119915,
  "status": "passed"
});
formatter.match({
  "location": "Basket.searchForTheBasket()"
});
formatter.result({
  "duration": 65790,
  "status": "passed"
});
formatter.match({
  "location": "Basket.updateTheBasket()"
});
formatter.result({
  "duration": 76988,
  "status": "passed"
});
formatter.match({
  "location": "Basket.ableToViewTheUpdatedBasket()"
});
formatter.result({
  "duration": 67190,
  "status": "passed"
});
});