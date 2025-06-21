from fasthtml.common import Link, fast_app, serve, Titled
from fasthtml.components import Form, Input, Button, Div, P, H1
import pytest

# Configuración de la app con MonsterUI para estilos
app, rt = fast_app(hdrs=(Link(rel="stylesheet", href="https://cdn.jsdelivr.net/npm/monsterui@0.1.0/dist/monsterui.min.css"),))

# Componente modular para el formulario
def form_component():
    return Form(
        Input(type="text", name="data", placeholder="Escribe algo...", cls="input"),
        Button("Enviar", cls="button primary"),
        action="/submit",
        hx_post="/submit",
        hx_target="#result"
    )

# Componente modular para el resultado
def result_component(text=""):
    return Div(P(text), id="result", cls="card")

# Ruta principal
@rt('/')
def get():
    return Titled("Calidad con FastHTML",
        Div(
            H1("Formulario Interactivo", cls="title"),
            form_component(),
            result_component(),
            cls="container"
        )
    )

# Ruta para procesar el formulario
@rt('/submit')
def post(data: str):
    return result_component(f"Datos recibidos: {data}")

# Función pura para lógica de negocio (ejemplo)
def process_data(data: str) -> str:
    return data.upper()

# Configuración para pruebas
def test_app():
    cli = app.test_client()
    resp = cli.get('/')
    assert resp.status_code == 200
    assert "Formulario Interactivo" in resp.text

if __name__ == '__main__':
    serve()