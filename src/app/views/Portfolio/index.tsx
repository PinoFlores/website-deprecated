import {FunctionComponent} from "react";
import {Card} from "../../components/Card";
import {CardMedia, Card as MUICard, CardContent, Typography, Grid} from "@mui/material";

export const PortfolioView: FunctionComponent<any> = () => {
  return (
    <>
      <Card style={{padding: "1rem 1.5rem"}}>
        <Typography variant="h6">Experience</Typography>
        <br />
        <Grid container spacing={3}>
          {[1, 2, 4, 5, 6].map(() => {
            return (
              <Grid item xs={12} sm={6} md={6}>
                <MUICard variant="outlined">
                  <CardMedia
                    component="img"
                    height="240"
                    image="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Del
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </MUICard>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </>
  );
};
