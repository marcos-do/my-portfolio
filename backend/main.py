from fastapi import FastAPI

app = FastAPI(swagger_ui_parameters={"syntaxHighlight": False})

@app.get("/description")
async def description():
    return {"message": """Ingeniero en informática. Me gustan los nuevos desafíos y aprender nuevas tecnologías. Tengo facilidad para dar
        presentaciones y he liderado hackatons en las que tuve que comunicarme en inglés. Aspiro a ser líder técnico."""}