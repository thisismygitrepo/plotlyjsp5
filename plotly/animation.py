
import plotly.express as px
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


# %%

df = px.data.gapminder()
fig = px.scatter(df, x="gdpPercap", y="lifeExp", animation_frame="year", animation_group="country",
                 size="pop", color="continent", hover_name="country",
                 log_x=True, size_max=55, range_x=[100, 100000], range_y=[25, 90])
fig.write_html('first_figure.html', auto_open=True)

# %%
data = np.random.random(size=(10, 100, 3))

idx = np.arange(data.shape[0], dtype='uint8').repeat(data.shape[1])
x_ax = np.tile(np.arange(data.shape[1]), data.shape[0])
data = data.reshape((data.shape[0] * data.shape[1],) + data.shape[2:])
df = pd.DataFrame(data, columns=["y1", "y2", "y3"])
df["animation_frame"] = idx
df['x_axis'] = x_ax
fig = px.line(df, x='x_axis', y=["y1", "y2", "y3"], animation_frame="animation_frame")
fig.write_html('first_figure.html', auto_open=True)

# Reading MRIs: generate mri struct.
files = tb.P("").search("*")
names = files.stem  # volunteers names
names = names.apply(lambda x: "0" + x if len(x) == 1 else x)
mris = tb.Struct.from_keys_values(names, files)

# Code translation (from README.md)
code_dict = tb.Struct({"00": "3b", "01": "11", "02": "22", "10": "33", "06": "3b", "07": "3c"})

# Reading S params
volunteers = tb.P("").search("*").apply(lambda x: tb.Struct(path=x,
                                                            array=code_dict[x.stem[:2]],
                                                            id=x.stem[-2:],
                                                            mri=mris[x.stem[-2:]],
                                                            code=x.stem))
# This List can be filtered by array or id.
volunteers.find(lambda x: x.array=="3b")
