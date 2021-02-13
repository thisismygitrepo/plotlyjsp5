
import plotly as pt
import plotly.graph_objects as go
import plotly.express as px

import numpy as np
import pandas as pd
import cufflinks as cf
cf.go_offline()

#%%

df_stocks = px.data.stocks()


#%% ABC
# Google: `color picker`

# automatically open figure in browser
dataset = [{"x": np.arange(10), "y": np.random.random(10)}]
pt.offline.plot(dataset)

# explicitly ask for html file
fig = go.Figure(data=go.Bar(y=[2, 3, 1]))  # data can be data or figure. Here it is a figure object.
fig.write_html('first_figure.html', auto_open=True)

# this works in Jupyter
# fig = go.Figure(data=go.Bar(y=[2, 3, 1]))
# fig.show()  # select

#%% Using Express

"""The fundemental difference between Express and GO is that Express is a fast way of doing things. In particular:
* Figures are created automatically and displaued automatically.
* Data is inserted as a dataframe and params are defined with respect to that dataframe.

px returns a figure, which can later be stylized.
While in GO, you create the Figure explicitly, then you start adding traced.
"""

fig = px.line(df_stocks, x='date', y='GOOG', labels={'x': 'Date', 'y': 'Price'})
fig.write_html('first_figure.html', auto_open=True)

# Make multiple line plots
fig = px.line(df_stocks, x='date', y=['GOOG', 'AAPL'], labels={'x': 'Date', 'y': 'Price'},
              title='Apple Vs. Google')
fig.write_html('first_figure.html', auto_open=True)


#%% GO

fig = go.Figure()
# You can pull individual columns of data from the dataset and use markers or not
fig.add_trace(go.Scatter(x=df_stocks.date, y=df_stocks.AAPL,
                         mode='lines', name='Apple'))
fig.add_trace(go.Scatter(x=df_stocks.date, y=df_stocks.AMZN,
                         mode='lines+markers', name='Amazon'))
# You can create custom lines (Dashes : dash, dot, dashdot)
fig.add_trace(go.Scatter(x=df_stocks.date, y=df_stocks.GOOG,
                         mode='lines+markers', name='Google',
                         line=dict(color='firebrick', width=2, dash='dashdot')))

# Further style the figure
# fig.update_layout(title='Stock Price Data 2018 - 2020',
#                    xaxis_title='Price', yaxis_title='Date')

# Go crazy styling the figure
fig.update_layout(
    # Shows gray line without grid, styling fonts, linewidths and more
    xaxis=dict(
        showline=True,
        showgrid=False,
        showticklabels=True,
        linecolor='rgb(204, 204, 204)',
        linewidth=2,
        ticks='outside',
        tickfont=dict(
            family='Arial',
            size=12,
            color='rgb(82, 82, 82)',
        ),
    ),
    # Turn off everything on y axis
    yaxis=dict(
        showgrid=False,
        zeroline=False,
        showline=False,
        showticklabels=False,
    ),
    autosize=False,
    margin=dict(
        autoexpand=False,
        l=100,
        r=20,
        t=110,
    ),
    showlegend=False,
    plot_bgcolor='white'
)

#%% Bar Chart
df_us = px.data.gapminder().query("country == 'United States'")
px.bar(df_us, x='year', y='pop')

# Create a stacked bar with more customization
df_tips = px.data.tips()
px.bar(df_tips, x='day', y='tip', color='sex', title='Tips by Sex on Each Day',
       labels={'tip': 'Tip Amount', 'day': 'Day of the Week'})

# Place bars next to each other
px.bar(df_tips, x="sex", y="total_bill",
       color='smoker', barmode='group')

# Display pop data for countries in Europe in 2007 greater than 2000000
df_europe = px.data.gapminder().query("continent == 'Europe' and year == 2007 and pop > 2.e6")
fig = px.bar(df_europe, y='pop', x='country', text='pop', color='country')
# Put bar total value above bars with 2 values of precision
fig.update_traces(texttemplate='%{text:.2s}', textposition='outside')
# Set fontsize and uniformtext_mode='hide' says to hide the text if it won't fit
fig.update_layout(uniformtext_minsize=8)
# Rotate labels 45 degrees
fig.update_layout(xaxis_tickangle=-45)


#%% animation

# Create an animated plot that you can use to cycle through continent
# GDP & life expectancy changes
df_cnt = px.data.gapminder()
fig = px.scatter(df_cnt, x="gdpPercap", y="lifeExp", animation_frame="year",
                 animation_group="country",
                 size="pop", color="continent", hover_name="country",
                 log_x=True, size_max=55, range_x=[100,100000], range_y=[25,90])
fig.write_html('first_figure.html', auto_open=True)

# Watch as bars chart population changes
px.bar(df_cnt, x="continent", y="pop", color="continent",
       animation_frame="year", animation_group="country", range_y=[0,4000000000])

