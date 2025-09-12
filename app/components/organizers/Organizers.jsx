import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebSiteIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
const Organizers = () => {
  return (
    <section id='organizers' className=' mt-5 p-5'>
        <div className="flex flex-col justify-center md:m-5">
          <h1 className="text-6xl font-bold text-center text-[#353A3F]">Organizers</h1>
        </div>
        <div className='flex justify-around md:gap-y-4 md:gap-x-4 flex-wrap md:px-11 mt-10'>
        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'transparent', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Caterina Viola"
                image="/cataniaqiskitfallfest/assets/profilePic/caterina_viola.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Caterina Viola
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Researcher @ Department of Mathematics and Computer Science, University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
                <Link target='blank' href={'https://web.dmi.unict.it/docenti/caterina.viola'}>
                    <Button size="small"><WebSiteIcon className="text-[#9D5CFD]" >
                        </WebSiteIcon>
                    </Button>
                </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'transparent', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Giulia Piccitto"
                image="/cataniaqiskitfallfest/assets/profilePic/giulia_piccitto.jpeg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Giulia Piccitto
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                Researcher @ Department of Mathematics and Computer Science, University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
                <Link target='blank' href={'https://web.dmi.unict.it/docenti/giulia.piccitto'}>
                    <Button size="small"><WebSiteIcon className="text-[#9D5CFD]" >
                        </WebSiteIcon>
                    </Button>
                </Link>
                <Link target='blank' href={'https://www.linkedin.com/in/giulia-piccitto-b54491b5/'}>
                    <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                        </LinkedInIcon>
                    </Button>
                </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'transparent', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Elenoire Scaletta"
                image="/cataniaqiskitfallfest/assets/profilePic/elenoire_scaletta.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Elenoire Scaletta
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                B.Sc. Student in Computer Science @ University of Catania 
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
                <Link target='blank' href={'https://www.linkedin.com/in/elenoire-scaletta-129667282/'}>
                    <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                        </LinkedInIcon>
                    </Button>
                </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'transparent', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Gabriele Messina"
                image="/cataniaqiskitfallfest/assets/profilePic/gabriele_messina.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    Gabriele Messina
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                 M.Sc. in Computer Science @ University of Catania
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link target='blank' href={'https://www.linkedin.com/in/messina-gabriele/'}>
                <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                    </LinkedInIcon>
                </Button>
            </Link>
            <Link target='blank' href={'https://github.com/GabrieleMessina'}>
                <Button size="small"><GitHubIcon className="text-[#9D5CFD]" >
                    </GitHubIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250, maxHeight:400, bgcolor:'transparent', boxShadow:'none', margin:'10px'}} align='center'>
            <CardMedia
                component="img"
                alt="Marco Gionfriddo"
                image="/cataniaqiskitfallfest/assets/profilePic/marco_gionfriddo.jpg"
                sx={{ objectFit: 'cover', width: '100%', height: '160px', width: '160px', objectPosition: 'center', borderRadius: "100%" }}
            />
            <CardContent sx={{textAlign: "center", padding:'5px'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                Marco Gionfriddo
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary'}}>
                M.Sc. Student in Computer Science @ University of Catania
                </Typography>
            </CardContent >
            <CardActions sx={{justifyContent: "center", padding:'2px'}}> 
            <Link target='blank' href={'https://www.linkedin.com/in/marco-gionfriddo-042183165/'}>
                <Button size="small"><LinkedInIcon className="text-[#9D5CFD]" >
                    </LinkedInIcon>
                </Button>
            </Link>
            <Link target='blank' href={'https://www.instagram.com/marcoging/'}>
                <Button size="small"><InstagramIcon className="text-[#9D5CFD]" >
                    </InstagramIcon>
                </Button>
            </Link>
            </CardActions>
        </Card>
        </div>
    </section>
  )
}

export default Organizers