# zoo-app requirements
## port -> 6785

### Routes
#### GET
-  / -> get all animals
-  /:id -> get animal by id
-  /type/:type -> get animal by type
-  /count/:type -> get animal count
-  /calculateAverageAge/:type -> get animals average age

#### POST
- /  -> create a new animal!

#### PUT
- /:id -> update an animal!
- /hbd/:id -> HBD! age++;

#### DELETE
- /:id -> delete an animal!
- /type/:type -> soyqirim a type!

## Animal model:
{
    id: string;
    name: string;
    type: lion; 
    age: number;
    gender: string;
}
